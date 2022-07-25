exports.getOffActivityOption = (barData) => {
    return {
        title: {
            text: 'Off Farm Income Activities Chart',
            left: 'center'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly: true },
                saveAsImage: { show: true }
            }
        },
        tooltip: {
            trigger: "axis",
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
              xAxisIndex: [0],
              start: 0,
              end: 40
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
              end: 40
            },
          ],
        xAxis: {
            type: 'category',
            data: barData.activity,
            axisLabel: {
                interval: 0,
                rotate: 45,
            },
        },
        yAxis: {
            type: 'value',
            name:'count'
        },
        series: [
            {
                data: barData.counts,
                type: 'bar',
                color:'orange'
            }
        ]
    }
}