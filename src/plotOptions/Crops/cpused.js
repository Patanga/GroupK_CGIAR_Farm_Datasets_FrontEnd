exports.getCpUsed = (usedData) => {
    return {
        title: {
            text: 'Crops Used',
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
        dataZoom: [
            {
                show: true,
                start: 30,
                end: 70
            },
            {
                type: 'inside',
                start: 0,
                end: 1
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