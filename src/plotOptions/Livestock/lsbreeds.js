export const getLsBreedsOption = (breData) => {
    return {
        title: {
            text: 'Breeds for Each Species',
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
        dataset: {
            source: breData,
        },
        xAxis: {
            type: "category",
            axisLabel: { interval: 0, rotate: 45 }
        },
        yAxis: {
            type: "value",
            name: "percentage(%)"
        },
        series: [ {type: "bar",color:'orange'} ]
    }
}