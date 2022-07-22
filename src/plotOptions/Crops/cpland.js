exports.getCpLand = (landData) => {
    var part = ["0~1","1~2","2~3","3~4","4~5","5~6","6~7","7~8","above 8"]
    var count =[0,0,0,0,0,0,0,0,0]
    landData.map(num=>{
        if (num[0]>=0&&num[0]<1){
            count[0]++;
        }
        if (num[0]>=1&&num[0]<2){
            count[1]++;
        }
        if (num[0]>=2&&num[0]<3){
            count[2]++;
        }
        if (num[0]>=3&&num[0]<4){
            count[3]++;
        }
        if (num[0]>=4&&num[0]<5){
            count[4]++;
        }
        if (num[0]>=5&&num[0]<6){
            count[5]++;
        }
        if (num[0]>=6&&num[0]<7){
            count[6]++;
        }
        if (num[0]>=7&&num[0]<8){
            count[7]++;
        }
        if (num[0]>=8){
            count[8]++;
        }
    })
    return {
        title: {
            text: 'Off Farm Income Propotion Chart',
            // subtext: 'Global',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                // magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: part,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Count',
                type: 'bar',
                barWidth: '60%',
                data: count
            }
        ]
    }
}