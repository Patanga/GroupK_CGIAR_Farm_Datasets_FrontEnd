export const getPieOption=(pieData)=> {
    var option={}
    option= {
        title: {
            text: 'Perenntage of earning per MAE per day',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{c} ({d}%)"
        },
        legend: {
            top: '10%',
            left: 'center'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly:true },
                saveAsImage: { show: true }
            }
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
            var p = Math.round(((tarValue / total) * 100)); //根据情况选择
            //var p=parseFloat((((tarValue / total) * 100)).toFixed(3))
            return `${name} (${p}%)`;
          },
        series: [
            {
              name: 'Access From',
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
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data:pieData,
              center: ["50%","60%"]
            }
        ]
    };
    return option
}