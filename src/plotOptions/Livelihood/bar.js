const echarts = require('echarts');

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
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Dollor($) per MAE per day',
                axisLabel: {
                    formatter: function (a) {
                        a = +a;
                        return isFinite(a) ? echarts.format.addCommas(+a / 1000) : '';
                    }
                }
            }
        ],
        dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              start: 50,
              end: 80
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
              end: 80
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
