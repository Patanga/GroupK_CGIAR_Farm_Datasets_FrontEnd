exports.getCpUsed = (usedData) => {
    return {
        title: {
            text: 'Crops Used and Consumed',
            left: 'center'
        },
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
              start: 20,
              end: 50
            },
            {
              type: 'slider',
              show: true,
              yAxisIndex: [0],
              left: '93%',
              start: 0,
              end: 100
            },
            {
              type: 'inside',
              xAxisIndex: [0],
              start: 20,
              end: 50
            },
          ],
        xAxis: [
            {
                type: 'category',
                data: usedData.cropName,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        series: [
            {
                name: 'Count',
                type: 'bar',
                barWidth: '60%',
                data: usedData.consumed,
                color:'#73c0de'
            },
            {
                name: 'Count',
                type: 'bar',
                barWidth: '60%',
                data: usedData.sold,
                color:'#3ba272'
            }
        ]
    }
}