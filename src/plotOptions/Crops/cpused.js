export const getCpUsed = (usedData) => {
    return {
        title: {
            text: 'Crops Used and Consumed',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'shadow'}
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
        legend: {
            top: '10%',
            left: 'center'
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
          dataset: [
            {
              dimensions: ['name', 'num1','num2'],
              source: usedData
            },
            {
              transform: {
                type: 'sort',
                config: { dimension: 'num2', order: 'asc' }
              }
            }
          ],
        xAxis: {
            type: 'category',
            axisLabel: { rotate: 45 }
        },
        yAxis:{
                type: 'value',
                name:'Count'},
        series: 
            [ {
                type: 'bar',
                encode: { x: 'name', y: 'num1' },
                datasetIndex: 1
              },{
                type: 'bar',
                encode: { x: 'name', y: 'num2' },
                datasetIndex: 1
              },]
        
    }
}