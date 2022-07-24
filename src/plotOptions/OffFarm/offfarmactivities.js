exports.getOffActivityOption = (barData) => {
    return {
        title: {
            text: 'Off Farm Income Activities Chart',
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
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        dataZoom: [
            {
                show: false,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                start: 0,
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
        xAxis: {
            type: 'category',
            data: barData.activity,
            axisLabel: {
                show: true,
                interval: 0,
                rotate: -60,
                inside: false,
                margin: 6,
                formatter: '{value} Day' ,
            },
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: barData.counts,
                type: 'bar'
            }
        ]
    }
}