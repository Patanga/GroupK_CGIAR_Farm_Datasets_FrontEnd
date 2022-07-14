exports.getBoxOption = (boxData) => {
    return {
        title: [
            {
                text: 'Annual Value per MAE',
                left: 'center'
            },
            {
                text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
                borderColor: '#999',
                borderWidth: 1,
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 14,
                    lineHeight: 20
                },
                left: '10%',
                top: '90%'
            }
        ],
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                // magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        dataset: [
            {
                // prettier-ignore
                source: boxData
            },
            {
                transform: {
                    type: 'boxplot',
                    //   config: { itemNameFormatter: 'expr {value}' }
                    // config: { itemNameFormatter: (e) => Object.keys(data.boxData)[e.value].replace("_ppp_per_mae", "").replace("_", " ") }
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
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
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
            name: '$',
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
    }
}