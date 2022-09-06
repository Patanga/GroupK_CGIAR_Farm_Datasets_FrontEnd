export const getLsUsagesOption = (useData) => {
    return {
        title: {
            text: 'Livestock Usages',
            left: 'center'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            top: '10%',
            left: 'center'
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {type: "shadow"},
            
        },
        grid: {
            top: '20%',
            containLabel: true
        },
        dataset: {
            source: useData
        },
        xAxis: {
            type: "category",
            axisLabel: { interval: 0 }
        },
        yAxis: {
            type: "value",
            name:"Percentage(%)"
        },
        series: [
            {name: "Sale", type: "bar"},
            {name: "Consume", type: "bar"}
        ]
    }
}