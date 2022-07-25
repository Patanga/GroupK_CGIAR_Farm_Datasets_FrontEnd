export const getLsFrequencyOption = (freData) => {
    return {
        title: {
            text: 'Frequency lifestock kept',
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
            source: freData,
        },
        xAxis: {
            type: "category",
            axisLabel: { interval: 0, rotate: 45 }
        },
        yAxis: {
            type: "value",
            name:'count',
        },
        series: [ {type: "bar",color:'orange'} ]
    }
}