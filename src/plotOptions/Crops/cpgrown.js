export const getCpGrown = (groData) => {
    return {
        title: {
            text: 'All Crops Grown',
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
              start: 0,
              end: 30
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
              start: 0,
              end: 30
            },
          ],
        dataset: [
            {
              dimensions: ['name', 'age'],
              source: groData
            },
            {
              transform: {
                type: 'sort',
                config: { dimension: 'name', order: 'asc' }
              }
            }
          ],
          xAxis: {
            type: 'category',
          },
          yAxis: {name: 'Count',},
          series: {
            type: 'bar',
            color:'orange',
            encode: { x: 'name', y: 'age' },
            datasetIndex: 1
          }
    }
}