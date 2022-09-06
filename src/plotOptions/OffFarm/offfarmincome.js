export const getOffIncomeOption = (hisData) => {
    return {
        title: {
            text: 'Off Farm Income Proportion',
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
                data: hisData.percentage,
            }
        ],
        yAxis: [
            {
                type: 'value',
                name:'Percentage'
            }
        ],
        series: [
            {
                name: 'Propotion',
                type: 'bar',
                //barWidth: '60%',
                color:'orange',
                data: hisData.rate
            }
        ]
    }
}