import React, {Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import AddTutorial from "./components/add-tutorial.component";
import ProjectsList from "./components/Projects-list.component";
//import Project from "./components/Project.component";
import DataTable from "./components/Tables.component";
import FoodSecurity from "./components/FoodSecurity.component";


class App extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">
          <a href="/projects" className="navbar-brand">
            MichaelJ
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/projects"} className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/food_security"} className="nav-link">
                Food_Security
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/projects"]} component={ProjectsList} />
            <Route path="/projects/:formid/:datatype" component={DataTable} />
            <Route path="/food_security" component={FoodSecurity} />
            {/* <Route path="/add" element={<AddTutorial />} /> wzj */}
            {/* <Route path="/projects/:id" element={<Project />} />*/}
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
