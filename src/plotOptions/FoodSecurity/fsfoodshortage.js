export const getFsFoodShortageOption = (data) => {
    if (data === null) {
        return ({
            title: {
                text: 'Food Shortage Month',
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
            xAxis: {
                type: "category",
                data: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
            },
            yAxis: {
                type: "value",
                name:'Householder Count'
            },
            series: [ {type: "bar",color:'orange'} ]
        });
    } else {
        const ave = data.average.toFixed(2);
        let aveText = "average number of months with food shortage: " + ave;
        return ({
            title: {
                text: "Food Shortage Month",
                subtext: aveText,
                left: 'center'
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {type: "shadow"}
            },
            dataset: {
                source: data.dataset
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: true },
                    saveAsImage: { show: true }
                }
            },
            grid: {
                top: '20%',
                containLabel: true
            },
            xAxis: {
                type: "category"
            },
            yAxis: {
                type: "value",
                name:'Householder Count'
            },
            series: [ {type: "bar",color:'orange'} ]
        });
    }
}