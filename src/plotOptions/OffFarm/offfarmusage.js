export const getOffUsageOption=(pieData)=> {
    var option={}
    option=  {
        title: {
            text: 'Off Farm Income Usage',
            left: 'center'
        },
        tooltip: {
            trigger: "item",
            formatter: "{c} ({d}%)"
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            top: "8%",
            left: "center",
            icon: "circle",
            itemGap: 5
        },
        formatter: function(name) {
            var data = option.series[0].data;
            var total = 0;
            var tarValue;
            for (var i = 0; i < data.length; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            //var p = Math.round(((tarValue / total) * 100)); //根据情况选择
            var p=parseFloat((((tarValue / total) * 100)).toFixed(2))
            return `${name} (${p}%)`;
          },
        series: [
            {
                name: 'Usage',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '1rem',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: pieData,
                center: ["50%","63%"],
            }
        ]
    };
    return option
}