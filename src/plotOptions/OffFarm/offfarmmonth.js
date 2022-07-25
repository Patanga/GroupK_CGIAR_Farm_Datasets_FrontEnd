export const getOffMonthOption = (monData) => {
    return {
        title: {
            text: 'Off Farm Month Count',
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
        xAxis: [
            {
                type: 'category',
                data: monData.month,
            }
        ],
        yAxis: [
            {
                type: 'value',
                name:'count'
            }
        ],
        series: [
            {
                name: 'Count',
                type: 'bar',
                barWidth: '60%',
                data: monData.count,
                color:'orange'
            }
        ]
    }
}