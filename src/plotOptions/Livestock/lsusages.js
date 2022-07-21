exports.getLsUsagesOption = (useData) => {
    return {
        title: {
            text: 'Lifestock Usages',
            left: 'left'
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
        legend: {},
        dataset: {
            source: useData
        },
        xAxis: {
            type: "category",
            axisLabel: { interval: 0, rotate: 45 }
        },
        yAxis: {
            type: "value"
        },
        series: [
            {name: "Sale", type: "bar"},
            {name: "Consume", type: "bar"}
        ]
    }
}