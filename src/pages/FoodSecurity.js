import ReactECharts from 'echarts-for-react';
import {count, buildFoodShortageData, buildHDDSData, buildFoodConsumedData} from '../calculators/foodSecurity'

const FoodSecurity = (dataProps) => {

    if(!dataProps.data.length) {
        return <h1>Sorry, no data in this group.</h1>
    }

    // Options - 需要分离出来放到plotOptions里面
    const getOptionOfHFIAS = (data) =>{
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

    const getOptionOfFoodShortage = (data) => {
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

    const getOptionOfHDDS = (data) => {
        let xMap = {
            0: "Lean Season",
            1: "Flush Season",
        }
        return ({
            dataset: [
                {
                    source: data
                },
                {
                    fromDatasetIndex: 0,
                    transform: {
                        type: 'boxplot',
                        config: { itemNameFormatter: (data) => xMap[data.value] }
                    }
                },
                {
                    fromDatasetIndex: 1,
                    fromTransformResult: 1
                }
            ],
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
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
            yAxis: {
                type: 'value',
                name: 'Score',
                splitArea: {
                    show: true
                }
            },
            series: [
                {
                    name: 'boxplot',
                    type: 'boxplot',
                    datasetIndex: 1
                },
                {
                    name: 'outlier',
                    type: 'scatter',
                    datasetIndex: 2
                }
            ]
        })
    }

    const getOptionOfFoodConsumed = (data) => {
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

    // return ECharts
    return (
        <>
            <div className="defaultChart">
                <h4>HFIAS</h4>
                {count.length !== 0 ?
                    (<div>
                        <ReactECharts
                            option={getOptionOfHFIAS(count(dataProps.data, "HFIAS"))}
                        />
                    </div>) :
                    (<div>
                        <p>Processing ...</p>
                        <ReactECharts
                            option={getOptionOfHFIAS(count(dataProps.data, "HFIAS"))}
                        />
                    </div>)}
            </div>

            <div className="defaultChart">
                <h4>Food Shortage</h4>
                {buildFoodShortageData !== null ?
                    (<div>
                        <ReactECharts
                            option={getOptionOfFoodShortage(buildFoodShortageData(dataProps.data))}
                        />
                    </div>) :
                    (<div>
                        <p>Processing ...</p>
                        <ReactECharts
                            option={getOptionOfFoodShortage(buildFoodShortageData(dataProps.data))}
                        />
                    </div>)}
            </div>

            <div className="defaultChart">
                <h4>HDDS</h4>
                {buildHDDSData.length !== 0 ?
                    (<div>
                        <ReactECharts
                            option={getOptionOfHDDS(buildHDDSData(dataProps.data))}
                        />
                    </div>) :
                    (<div>
                        <p>Processing ...</p>
                        <ReactECharts
                            option={getOptionOfHDDS(buildHDDSData(dataProps.data))}
                        />
                    </div>)}
            </div>

            <div className="defaultChart">
                <h4>Food Consumed</h4>
                {buildFoodConsumedData.length !== 0 ?
                    (<div>
                        <ReactECharts
                            option={getOptionOfFoodConsumed(buildFoodConsumedData(dataProps.data))}
                        />
                    </div>) :
                    (<div>
                        <p>Processing ...</p>
                        <ReactECharts
                            option={getOptionOfFoodConsumed(buildFoodConsumedData(dataProps.data))}
                        />
                    </div>)}
            </div>
        </>
    )
}
export default FoodSecurity;