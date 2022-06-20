import React, {Component} from "react";
import ReactEcharts from "echarts-for-react";
import fullDataService from "../services/data.service";

export default class FoodSecurity extends Component {
  constructor(props) {
    super(props);
    this.getHFIASData = this.getHFIASData.bind(this);
    this.getOptionOfHFIAS = this.getOptionOfHFIAS.bind(this);
    this.getOptionOfFoodShortage = this.getOptionOfFoodShortage.bind(this);
    this.getOptionOfHDDS = this.getOptionOfHDDS.bind(this);
    this.getOptionOfFoodConsumed = this.getOptionOfFoodConsumed.bind(this);

    this.state = {
      households: [],
      dataHFIAS: [],
      dataFoodShortage: [],
      dataHDDS: [],
      dataFoodConsumed: []
    };
  }

  componentDidMount() {
    this.getHFIASData();
  }

  getHFIASData() {
    fullDataService.getHFIASDataByCondition("ups")
      .then(res => {
        this.setState({
          dataHFIAS: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }


  getOptionOfHFIAS() {
    const {dataHFIAS} = this.state;
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
        data: dataHFIAS,
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
    })
  }

  getOptionOfFoodShortage() {
    const {dataFoodShortage} = this.state;
    return ({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [{
        data: dataFoodShortage,
        type: "bar"
      }]
    })
  }

  getOptionOfHDDS() {
    return ({
      title: [
        {
          text: 'Temple',
          left: 'center'
        },
        {
          text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
          borderColor: '#999',
          borderWidth: 1,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 20
          },
          left: '10%',
          top: '90%'
        }
      ],
      dataset: [
        {
          // prettier-ignore
          source: [
            [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
            [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
            [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
            [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
            [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
          ]
        },
        {
          transform: {
            type: 'boxplot',
            config: { itemNameFormatter: 'expr {value}' }
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
      grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
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
        name: 'km/s minus 299,000',
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

  getOptionOfFoodConsumed() {
    return ({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar"
      }]
    })
  }


  render() {
    const{dataHFIAS, dataFoodShortage, dataHDDS, dataFoodConsumed} = this.state;
    return(
      <div className="list row">

        <div className="col-md-6">
          <h4>HFIAS</h4>
          {dataHFIAS.length !== 0 ?
            (<div>
              <ReactEcharts
                option={this.getOptionOfHFIAS()}
              />
            </div>) :
            (<div>
              <p>Processing ...</p>
              <ReactEcharts
                option={this.getOptionOfHFIAS()}
              />
            </div>)}
        </div>

        <div className="col-md-6">
          <h4>Food Shortage</h4>
          {dataFoodShortage.length !== 0 ?
            (<div>
              <ReactEcharts
                option={this.getOptionOfFoodShortage()}
              />
            </div>) :
            (<div>
              <p>Processing ...</p>
              <ReactEcharts
                option={this.getOptionOfFoodShortage()}
              />
            </div>)}
        </div>

        <div className="col-md-6">
          <h4>HDDS</h4>
          {dataHDDS.length !== 0 ?
            (<div>
              <ReactEcharts
                option={this.getOptionOfHDDS()}
              />
            </div>) :
            (<div>
              <p>Processing ...</p>
              <ReactEcharts
                option={this.getOptionOfHDDS()}
              />
            </div>)}
        </div>

        <div className="col-md-6">
          <h4>Food Consumed</h4>
          {dataFoodConsumed.length !== 0 ?
            (<div>
              <ReactEcharts
                option={this.getOptionOfFoodConsumed()}
              />
            </div>) :
            (<div>
              <p>Processing ...</p>
              <ReactEcharts
                option={this.getOptionOfFoodConsumed()}
              />
            </div>)}
        </div>

      </div>
    )
  }
}
