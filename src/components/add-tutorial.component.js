import React, {Component} from "react";
import tutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",
            published: false,
            submitted: false
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    saveTutorial() {
        let data = {
            title: this.state.title,
            description: this.state.description
        };
        tutorialDataService.create(data)
          .then(res => {
              this.setState({
                  id: res.data.id,
                  title: res.data.title,
                  description: res.data.description,
                  published: res.data.published,
                  submitted: true
              });
              console.log(res.data);
          })
          .catch(err => {
              console.log(err);
          });
    }

    newTutorial() {
        this.setState({
            id: null,
            title: "",
            description: "",
            published: false,
            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? 
                (<div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={this.newTutorial}>
                        Add
                    </button>
                </div>) : 
                (<div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        name="title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                        type="text"
                        className="form-control"
                        id="description"
                        required
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        name="description"/>
                    </div>
                    <button onClick={this.saveTutorial} className="btn btn-success">
                        Submit
                    </button>
                </div>)
                }
            </div>
        );
    }
}