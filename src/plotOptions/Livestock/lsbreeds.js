exports.getLsBreedsOption = (breData) => {
    return {
        title: {
            text: 'Lifestock Breeds Data',
            left: 'center'
        },
        tooltip: {
            trigger: "item",
            formatter: "{c} %"
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
            source: breData,
        },
        xAxis: {
            type: "category",
            axisLabel: { interval: 0, rotate: 45 }
        },
        yAxis: {
            type: "value",
            name: "%"
        },
        series: [ {type: "bar"} ]
    }
}