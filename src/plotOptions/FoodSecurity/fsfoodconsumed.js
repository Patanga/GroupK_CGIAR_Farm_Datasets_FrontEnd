export const getFsFoodConsumedOption = (data) => {
    if (data.length === 0) {
        return ({
            title: {
                text: 'Food Consumed in Lean and Flush Seasons',
                left: 'center'
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly:true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                top: "10%",
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
                data: ['eggs', 'fruits', 'grainsrootstubers', 'legumes', 'meat',
                    'milk_dairy', 'nuts_seeds', 'veg_leafy', 'vegetables', 'vita_veg_fruit'],
                axisLabel: { interval: 0, rotate: 45 }
            },
            yAxis: {
                type: "value"
            },
            series: [
                {name: "Lean Season", type: "bar"},
                {name: "Flush Season", type: "bar"}
            ]
        });
    } else {
        return ({
            title: {
                text: 'Food Consumed in Lean and Flush Seasons',
                left: 'center'
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly:true },
                    saveAsImage: { show: true }
                }
            },
            grid: {
                top: '20%',
                containLabel: true
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {type: "shadow"}
            },
            legend: {
                top: "10%",
            },
            dataset: {
                source: data
            },
            xAxis: {
                type: "category",
                axisLabel: { interval: 0, rotate: 45 }
            },
            yAxis: {
                type: "value"
            },
            series: [
                {name: "Lean Season", type: "bar"},
                {name: "Flush Season", type: "bar"}
            ]
        });
    }
}