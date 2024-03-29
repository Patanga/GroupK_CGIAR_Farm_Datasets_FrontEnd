export const getBarOption = (barData) => {
    return {
        title: {
            text: 'Total Value of Livelihoods Activities',
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
        legend: {
            type: 'scroll',
            top: '6%',
            itemGap :5,
            itemWidth:15,
            itemHeight:7,
            textStyle: {
                fontSize:10,
            },
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
        xAxis: [
            {
                show: false,
                type: 'category',
                name:"Livelihood ID"
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'USD per person per day',
            }
        ],
        dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              start: 50,
              end: 86
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
              start: 50,
              end: 86
            },
          ],
        dataset: [{
            dimensions: [
                'id_unique',
                'incm_lstk',
                'incm_crop',
                'incm_off',
                'cons_lstk',
                'cons_crop',
                'tva'
            ],
            source: barData
        },
        {
            transform: {
                type: 'sort',
                config: { dimension: 'tva', order: 'asc' }
            }
        },
        ],
        series: [

            {
                name: 'Livestock Income',
                type: 'bar',
                stack: 's',
                datasetIndex: 1,
                emphasis: {
                    focus: 'series'
                }
            },
            {
                name: 'Crops Income',
                type: 'bar',
                stack: 's',
                datasetIndex: 1,
                emphasis: {
                    focus: 'series'
                }
            },
            {
                name: 'Off Farm Income',
                type: 'bar',
                stack: 's',
                datasetIndex: 1,
                emphasis: {
                    focus: 'series'
                }
            },
            {
                name: 'Livestock Consumed',
                type: 'bar',
                stack: 's',
                datasetIndex: 1,
                emphasis: {
                    focus: 'series'
                }
            },
            {
                name: 'Crops Consumed',
                type: 'bar',
                stack: 's',
                datasetIndex: 1,
                emphasis: {
                    focus: 'series'
                }
            },

        ]
    }
}
