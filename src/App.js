import React, {Component} from "react";
//import { Switch, Route, Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// 布局组件（？）
import Display from "./components/display";
import Topics from "./components/topics"
import Groupings from "./components/groupings"

// 筛选组件（topic & grouping）
import dashboardTopic from "./components/DashboardTopics"
import dashboardGrouping from "./components/DashboardGrouping"

class App extends Component {
  // The default setting of dashboard
  // 怎么设置这个状态组件比较好呢？
  state = {
    dashboards: [
      { topic: dashboardTopic("MainPage"), //传入的参数是什么？字符串
        /*Grouping: dashboardGrouping(),*/
/*        countries: all,
        subNational_regions: all,
        projects: all,
        incomeCategories: all,*/
      },
    ],
  };

  // Change to Different topic of dashboard
  toMainPage = () => {
    this.setState(
        {
          topic: dashboardTopic("MainPage")
        }
    )
  }

  toLivelihoods = () => {
    this.setState(
        {
          topic: dashboardTopic("Livelihoods")
        }
    )
  }

  toFoodSecurity = () => {
    this.setState(
        {
          topic: dashboardTopic("FoodSecurity")
        }
    )
  }

  toCrops = () => {
    this.setState(
        {
          topic: dashboardTopic("Crops")
        }
    )
  }

  toLivestock = () => {
      this.setState(
          {
              topic: dashboardTopic("Livestock")
          }
      )
  }

  toOffFarmIncome = () => {
    this.setState(
        {
          topic: dashboardTopic("OffFarmIncome")
        }
    )
  }


  // TODO - Change Grouping - Countries
  handleGroupingCountries = () => {
  };

  // Change Grouping - Others...

  // Render
  render() {
    return (
      <div className = "main_wrap">
        <main className = "container">
          <div className = "dashboard__box">
            <Display
                /*TODO - Dashboard import
                *  allDashboard期望： 接收topic(形式：api and eChart?)和grouping信息
                *  渲染图表
                * */
                /*allDashboard={}*/
            />
            <Topics
                toMainPage = {this.toMainPage}
                toLivelihoods = {this.toLivelihoods}
                toFoodSecurity = {this.toFoodSecurity}
                toCrops = {this.toCrops}
                toLivestock = {this.toLivestock}
                toOffFarmIncome = {this.toOffFarmIncome}
            />
            <Groupings/>
          </div>
        </main>
      </div>
    );
  }

}

export default App;
