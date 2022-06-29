import React, {Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { InputPicker } from 'rsuite';
import groupingData from './groupingSample/data.json'


import MainPage from "./components/mainpage.component"
import Livelihoods from "./components/livelihoods.component";
import FoodSecurity from "./components/FoodSecurity.component";
import Crops from "./components/crops.component";
import Livestock from "./components/livestock.component";
import OffFarmIncome from "./components/offFarmIncome.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">
          <a href="/main_page" className="navbar-brand">
            Rhomis
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/livelihoods"} className="nav-link">
                Livelihoods
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/food_security"} className="nav-link">
                Food Security
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/crops"} className="nav-link">
                Crops
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/livestock"} className="nav-link">
                Livestock
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/off_farm_income"} className="nav-link">
                Off Farm Income
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/main_page"]} component={MainPage} />
            <Route path="/livelihoods" component={Livelihoods} />
            <Route path="/food_security" component={FoodSecurity} />
            <Route path="/crops" component={Crops} />
            <Route path="/livestock" component={Livestock} />
            <Route path="/off_farm_income" component={OffFarmIncome} />
          </Switch>
        </div>

         {/*TODO - 从json中读取选项，点击选项触发事件*/}
        <div>
          Grouping:
          <form onSubmit={this.handleSubmit}>
            <label>
              Country
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">葡萄柚</option>
                <option value="lime">酸橙</option>
                <option value="coconut">椰子</option>
                <option value="mango">芒果</option>
              </select>
            </label>
            <input type="submit" value="确认" />
          </form>
          <form onSubmit={this.handleSubmit}>
            <label>
              Sub region
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">葡萄柚</option>
                <option value="lime">酸橙</option>
                <option value="coconut">椰子</option>
                <option value="mango">芒果</option>
              </select>
            </label>
            <input type="submit" value="确认" />
          </form>
          <form onSubmit={this.handleSubmit}>
            <label>
              收入水平
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">葡萄柚</option>
                <option value="lime">酸橙</option>
                <option value="coconut">椰子</option>
                <option value="mango">芒果</option>
              </select>
            </label>
            <input type="submit" value="确认" />
          </form>
        </div>

        <div class = "Dashboard">
        </div>

      </div>
    );
  }

}

export default App;
