export const getLsHeadsOption = (headsData) => {
    let boxData = headsData || {};
    return {
        title:[ {
            text: 'Livestock Heads',
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
            left: '10%',
            top: '0%'
        }
    ],
    toolbox: {
        show: true,
        feature: {
            dataView: { show: true, readOnly: true },
            saveAsImage: { show: true }
        }
    },
    tooltip: {
        trigger: "item",
        axisPointer: {type: "shadow"}
    },
    grid: {
        top: '20%',
        containLabel: true
    },
    dataZoom: [
        {
          type: 'slider',
          show: true,
          yAxisIndex: [0],
          left: '93%',
          start: 0,
          end: 1
        },
      ],
    
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