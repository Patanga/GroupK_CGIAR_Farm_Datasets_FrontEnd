exports.getCpLand = (landData) => {
    var bins = ecStat.histogram(landData);
    // 柱子间间隔的刻度
    var interval;
    var min = Infinity;
    var max = -Infinity;
    var data = echarts.util.map(bins.data, function (item, index) {
        // 左刻度
        var x0 = bins.bins[index].x0;
        // 右刻度
        var x1 = bins.bins[index].x1;
        interval = x1 - x0;
        // 获得数据集中最值
        min = Math.min(min, x0);
        max = Math.max(max, x1);
        // item[0]代表刻度的中间值，item[1]代表出现的次数
        return [x0, x1, item[1]];
    });

    function renderItem(params, api) {
        // 这个根据自己的需求适当调节
        var yValue = api.value(2);
        var start = api.coord([api.value(0), yValue]);
        var size = api.size([api.value(1) - api.value(0), yValue]);
        var style = api.style();
        return {
            // 矩形及配置
            type: 'rect',
            shape: {
                x: start[0] + 1,
                y: start[1],
                width: size[0] - 2,
                height: size[1]
            },
            style: style
        };
    }
    option = {
        title: {
            text: 'Histogram of Crops',
            left: 'center',
            top: 10
        },
        color: ['rgb(25, 183, 207)'],
        grid: {
            top: 80,
            containLabel: true
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
        dataZoom: [
            {
                show: true,
                start: 30,
                end: 70
            },
            {
                type: 'inside',
                start: 0,
                end: 1
            },
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
        ],
        xAxis: [
            {
                type: 'value',
                min: min,
                max: max,
                interval: interval
            }],
        yAxis: [{
            type: 'value',
        }],
        series: [{
            name: 'frequency',
            type: 'custom',
            renderItem: renderItem,
            label: {
                show: true,
                position: 'insideTop'
            },
            encode: {
                // 表示将data中的data[0]和data[1]映射到x轴
                x: [0, 1],
                // 表示将data中的data[2]映射到y轴
                y: 2,
                // 表示将data中的data[2]映射到tooltip
                tooltip: 2,
                // 表示将data中的data[2]映射到label
                label: 2
            },
            data: data
        }]
    };
    return option
}