exports.getFsHDDSOption = (data) => {
    let xMap = {
        0: "Lean Season",
        1: "Flush Season",
    }
    return ({
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