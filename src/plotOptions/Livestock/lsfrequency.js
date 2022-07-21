exports.getLsFrequencyOption = (freData) => {
    return {
        title: {
            text: 'Frequency lifestock kept',
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
        dataset: {
            source: freData,
        },
        xAxis: {
            type: "category",
            axisLabel: { interval: 0, rotate: 45 }
        },
        yAxis: {
            type: "value"
        },
        series: [ {type: "bar"} ]
    }
}