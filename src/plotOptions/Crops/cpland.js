export const getCpLand = (landData) => {
    var part = ["0~1","1~2","2~3","3~4","4~5","5~6","6~7","7~8","8~9","9~10","over 10"]
    var count =[0,0,0,0,0,0,0,0,0,0,0]
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
        if (num[0]>=8&&num[0]<9){
            count[8]++;
        }
        if (num[0]>=9&&num[0]<10){
            count[9]++;
        }
        if (num[0]>=10){
            count[10]++;
        }
    })
    return {
        title: {
            text: 'Total Land Area Cultivated',
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
                dataView: { show: true, readOnly: true },
                saveAsImage: { show: true }
            }
        },
        grid: {
            top: '20%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: part,
                name:'Acre',
                axisLabel: { interval: 0,rotate: 45}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name:'Count'
            }
        ],
        series: [
            {
                name: 'Count',
                type: 'bar',
                color:'orange',
                data: count
            }
        ]
    }
}