const echarts = require('echarts');
export const getBoxOption = (boxData) => {
    return {
        title:[ 
          {
            text: 'Annual Livelihood Value',
            subtext:'Press Legend to Toggle',
            left: 'center'
          },
          {
            text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
            borderColor: '#999',
            borderWidth: 1,
            textStyle: {
              fontWeight: 'normal',
              fontSize: 10,
              lineHeight: 20
            },
          }
        ],
      dataZoom: [
        {
          type: 'slider',
          show: true,
          yAxisIndex: [1],
          left: '93%',
          start: 0,
          end: 100
        },
      ],
        dataset: [
          {
            // prettier-ignore
            source: boxData.box
          },
          {
            transform: {
              type: 'boxplot',
              // config: { itemNameFormatter: 'box {value}' } // x-axis name
            }
          },
          {
            fromDatasetIndex: 1,
            fromTransformResult: 1
          }
        ],
        tooltip: {
          trigger: "item",
          axisPointer: { type: "shadow" }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly:true },
                saveAsImage: { show: true }
            }
        },
        grid: {top:"22%",
        containLabel: true
        },
        legend: {
          data: [{ name: "Zero Count" }, { name: "Box" },{name:'Outlier'}],
          top: "12%",
          textStyle: {
            color: "black" //legend color
          },
          selected: { Outlier: false },
        },
        xAxis: [
          // bar x-axis
          {
            type: "category",
            nameGap: 30,
            boundaryGap: true,
            data: ["Crops Consumed", "Crops Sold", "Livestock Consumed", "Livestock Sold", "Off Farm Income "],
            axisLine: { lineStyle: { color: "#939495" } },
            axisLabel: { interval: 0, rotate: 30 },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            }
    
          }, 
          //
          { show:false,//false
            type: 'category',
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          
         
        ],
        
        yAxis: [
          {
            type: "value",
            name: "Zero Count",
            splitLine: {
              show: false
            },
            splitArea: {
              show: true
            },
            axisLabel: {
              show: true,
              fontSize: 14,
              color: "#939495"
            },
          },
          {
            type: "value",
            name: "K/Thousands of USD",
            show: true,
            axisLabel: {
              show: true,
              fontSize: 14,
              formatter:function(a){
                a=+a;
                return isFinite(a)?echarts.format.addCommas(+a/1000):'';
            },
              color: "#939495"
            },
            axisLine: { lineStyle: { color: "#939495" } }, 
            splitArea: {
              show: true,
              lineStyle: { color: "#939495" }
            } //
          },
          
        ],
    
    
    
        series: [
          {
            name: "Zero Count",
            type: "bar",
            data: boxData.count,
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: "orange"
              }
            },
          },
          {
            name: 'Box',
            type: 'boxplot',
            datasetIndex: 1,
            yAxisIndex: 1, 
            xAxisIndex: 1,  
          },
          {
            name: 'Outlier',
            type: 'scatter',
            yAxisIndex: 1, 
            datasetIndex: 2,
            xAxisIndex: 1, 
          }
        ]
    
    
      };
}