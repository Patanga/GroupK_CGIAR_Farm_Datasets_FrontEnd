exports.getLsHeadsOption = (headsData) => {
    let boxData = headsData || {};
    return {
        dataset: [
            {
                source: Object.values(boxData)
            },
            {
                fromDatasetIndex: 0,
                transform: {
                    type: 'boxplot',
                    config: { itemNameFormatter: (data) => Object.keys(boxData)[data.value] }
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
        dataZoom: [
            {
                show: false,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
        ],
        xAxis: {
            type: 'category',
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: { interval: 0, rotate: 45 }
        },
        yAxis: {
            type: 'value',
            name: 'Heads',
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