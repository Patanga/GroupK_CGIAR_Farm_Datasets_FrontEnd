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
                dataView: { show: true, readOnly:true },
                saveAsImage: { show: true }
            }
        },
        dataZoom: [
            {
              type: 'slider',
              show: true,
              yAxisIndex: [0],
              left: '93%',
              start: 0,
              end: 80
            },
          ],
        dataset: [
            {
                // prettier-ignore
                source: boxData
            },
            {
                transform: {
                    type: 'boxplot',
                }
            },
            {
                fromDatasetIndex: 1,
                fromTransformResult: 1
            }
        ],
        tooltip: {
            trigger: '',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '20%',
    
            containLabel: true
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
            name: 'Dollar($)',
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