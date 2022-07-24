exports.getFsHFIASOption = (data) => {
    return ({
        tooltip: {
            trigger: "item",
            formatter: "{c} ({d}%)"
        },
        legend: {
            top: "5%",
            left: "center"
        },
        series: [{
            data: data,
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 5,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: "center",
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: "1rem",
                    fontWeight: "bold"
                }
            },
            labelLine: {
                show: false
            }
        }]
    });
}