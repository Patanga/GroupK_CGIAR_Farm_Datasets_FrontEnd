export const getCpYields = (yieData) => {
    return {
        title: [
            {
                text: 'Crops Yields',
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
        
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly: true },
                saveAsImage: { show: true }
            }
        },
        grid: {
            top: '20%',
            containLabel: true
        },
        dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              start: 30,
              end: 50
            },
            {
              type: 'slider',
              show: true,
              yAxisIndex: [0],
              left: '93%',
              start: 0,
              end: 5
            },
            {
              type: 'inside',
              xAxisIndex: [0],
              start: 30,
              end: 50
            },
          ],

        dataset: [
            {
                source: yieData.yields
            },
            {
                transform: {
                    type: 'boxplot',
                    config: { itemNameFormatter: function (params) {
                            return yieData.cropName[params.value];
                        }}
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
            }
        },
        yAxis: {
            type: 'value',
            name:"count",
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