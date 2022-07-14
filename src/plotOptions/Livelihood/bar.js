const echarts = require('echarts');

exports.getBarOption = (barData) => {
    return {
        title: {
            text: 'Total value of activities',
            // subtext: 'Global',
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
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                // magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        legend: {
            show: false,
            itemGap: 10,
        },
        grid: {
            top: '12%',
            left: '1%',
            right: '10%',
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
                name: '$ per MAE per day',
                nameTextStyle: {
                    align: 'left',
                },
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
                show: true,
                start: 50,
                end: 80
            },
            {
                type: 'inside',
                start: 84,
                end: 100
            },
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
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
