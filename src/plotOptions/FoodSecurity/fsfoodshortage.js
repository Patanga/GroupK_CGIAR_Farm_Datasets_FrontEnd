exports.getFsFoodShortageOption = (data) => {
    if (data === null) {
        return ({
            xAxis: {
                type: "category",
                data: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
            },
            yAxis: {
                type: "value"
            },
            series: [ {type: "bar"} ]
        });
    } else {
        const ave = data.average.toFixed(2);
        let aveText = "average number of months with food shortage: " + ave;
        return ({
            title: {
                text: "",
                subtext: aveText
            },
            tooltip: {},
            dataset: {
                source: data.dataset
            },
            xAxis: {
                type: "category"
            },
            yAxis: {
                type: "value"
            },
            series: [ {type: "bar"} ]
        });
    }
}