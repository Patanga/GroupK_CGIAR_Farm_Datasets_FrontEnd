exports.getFsFoodConsumedOption = (data) => {
    if (data.length === 0) {
        return ({
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
            tooltip: {
                trigger: "axis",
                axisPointer: {type: "shadow"}
            },
            legend: {},
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