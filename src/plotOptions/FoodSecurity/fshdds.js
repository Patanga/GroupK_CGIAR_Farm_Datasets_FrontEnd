export const getFsHDDSOption = (data) => {
    let xMap = {
        0: "Lean Season",
        1: "Flush Season",
    }
    return ({
        title:[ {
            text: 'HDDS in Lean and Flush Seasons',
            left: 'center'
        },
        {
            text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
            borderColor: '#999',
            borderWidth: 1,
            textStyle: {
                fontWeight: 'normal',
                fontSize: 10,
                lineHeight: 20
            },
        }
    ],
        grid: {
            top: '20%',
            containLabel: true
        },
        dataset: [
            {
                source: data
            },
            {
                fromDatasetIndex: 0,
                transform: {
                    type: 'boxplot',
                    config: { itemNameFormatter: (data) => xMap[data.value] }
                }
            },
            {
                fromDatasetIndex: 1,
                fromTransformResult: 1
            }
        ],
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly:true },
                saveAsImage: { show: true }
            }
        },
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            name: 'Score',
            splitArea: {
                show: true
            }
        },
        series: [
            {
                name: 'boxplot',
                type: 'boxplot',
                datasetIndex: 1
            },
            {
                name: 'outlier',
                type: 'scatter',
                datasetIndex: 2
            }
        ]
    })
}