export const getCpUsed = (usedData) => {
    return {
        title: {
            text: 'Crops Sold and Consumed',
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
            top: '18%',
            containLabel: true,
        },
        legend: {
            top: '8%',
            left: 'center',
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
              dimensions: ['name', 'Used','Consumed'],
              source: usedData
            },
          ],
        xAxis: {
            type: 'category',
            axisLabel: { rotate: 45 }
        },
        yAxis:{
                type: 'value',
                name:'Count'},
        series: [{type: 'bar'},{type: 'bar'}]
    }
}