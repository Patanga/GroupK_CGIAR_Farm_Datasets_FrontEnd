import React, {Component} from "react";
import tutorialDataService from "../services/projects.service";
import {Link} from "react-router-dom";

export default class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchProid = this.onChangeSearchProid.bind(this);
        this.retrieveProjects = this.retrieveProjects.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProject = this.setActiveProject.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.searchProID = this.searchProID.bind(this);

        this.state = {
            projects: [],
            currentProject: null,
            currentIndex: -1,
            searchProid: ""
        };
    }

    componentDidMount() {
        this.retrieveProjects();
    }

    retrieveProjects() {
        tutorialDataService.getAll()
          .then(res => {
              this.setState({
                  projects: res.data
              });
              console.log(res.data);
          })
          .catch(err => {
              console.log(err);
          });
    }

    onChangeSearchProid(e) {
        this.setState({
            searchProid: e.target.value
        });
    }

    refreshList() {

    }

    setActiveProject(project, index) {
        this.setState({
            currentProject: project,
            currentIndex: index
        });
    }

    removeAllTutorials() {

    }

    searchProID() {
        tutorialDataService.findByProID(this.state.searchProid)
          .then(res => {
              this.setState({
                projects: res.data
              });
              console.log(res.data);
          })
          .catch(err => {
              console.log(err);
          });
    }

    render() {
        const {searchProid, projects, currentProject, currentIndex} = this.state;
        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input 
                          type="text"
                          className="form-control"
                          placeholder="Search by projectID"
                          value={searchProid}
                          onChange={this.onChangeSearchProid}
                        />
                        <div className="input-group-append">
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={this.searchProID}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Projects List</h4>
                    <ul className="list-group">
                        {projects && 
                          projects.map((project, index) => (
                            <li 
                              className={
                                  "list-group-item " +
                                  (index === currentIndex ? "active" : "")
                              }
                              onClick={() => this.setActiveProject(project, index)}
                              key={index}>
                                  {project.formID}
                            </li>
                        ))}
                    </ul>
                    <button
                      className="m-3 btn btn-sm btn-danger"
                      onClick={this.removeAllTutorials}>
                        Remove All
                    </button>
                </div>
                <div className="col-md-6">
                    {currentProject ? 
                    (<div>
                        <h4>Project</h4>
                        <div>
                            <label>
                                <strong>formID:</strong>
                            </label>{" "}
                            {currentProject.formID}
                        </div>
                        <div>
                            <label>
                                <strong>projectID:</strong>
                            </label>{" "}
                            {currentProject.projectID}
                        </div>
                        <div>
                            <label>
                                <strong>units:</strong>
                            </label>
                            <ul className="list-wzj">
                                {currentProject && currentProject.units.map((unit, index) => (
                                    <li 
                                      className="list-wzj-item"
                                      key = {index}>
                                        {unit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <label>
                                <strong>dataSets:</strong>
                            </label>
                            <ul className="list-wzj">
                                {currentProject && currentProject.dataSets.map((dataset, index) => (
                                    <li 
                                      className="list-wzj-item" 
                                      key = {index}>
                                        <Link to={"/projects/" + currentProject.formID + "/" + dataset}>
                                          {dataset}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link
                          to={"/projects/" + currentProject.id}
                          className="badge badge-warning">
                            Edit
                        </Link>
                    </div>) : 
                    (<div>
                        <br />
                        <p>Please click on a Project...</p>
                    </div>)
                    }
                </div>
            </div>
        );
    }
}