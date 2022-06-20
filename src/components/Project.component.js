import React, {Component} from "react";
import tutorialDataService from "../services/projects.service";


export default class Project extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getTutorial = this.getTutorial.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);

        this.state = {
            currentTutorial: {
                id: null,
                title: "",
                description: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.getTutorial(this.props.match.params.id);
    }

    onChangeTitle(e) {
        this.setState(function(prevState) {
            return {
                currentTutorial: {
                    ...prevState.currentTutorial,
                    title: e.target.value
                }
            };
        });
    }

    onChangeDescription(e) {
        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                description: e.target.value
            }
        }));
    }

    getTutorial(id) {
        tutorialDataService.get(id)
           .then(res => {
               this.setState({
                   currentTutorial: res.data
               });
               console.log(res.data);
           })
           .catch(err => {
               console.log(err);
           });
    }

    updatePublished(status) {
        let data = {
            id: this.state.currentTutorial.id,
            title: this.state.currentTutorial.title,
            description: this.state.currentTutorial.description,
            published: status
        };

        tutorialDataService.update(this.state.currentTutorial.id, data)
            .then(res => {
                this.setState(prevState => ({
                    currentTutorial: {
                        ...prevState.currentTutorial,
                        published: status
                    }
                }));
            })
            .catch(err => {
                console.log(err);
            });
    }

    updateTutorial() {}

    deleteTutorial() {}

    render() {
        const { currentTutorial } = this.state;
        return (
            <div>
                {currentTutorial ? 
                (<div className="edit-form">
                    <h4>Tutorial</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="title"
                              value={currentTutorial.title}
                              onChange={this.onChangeTitle}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                              type="text"
                              className="form-control"
                              id="description"
                              value={currentTutorial.description}
                              onChange={this.onChangeDescription}/>
                        </div>
                        <div className="form-group">
                            <label>
                                <strong>Status:</strong>
                            </label>{" "}
                            {currentTutorial.published ? "Published" : "Pending"}
                        </div>
                    </form>
                    {currentTutorial.published ? 
                    (<button 
                      className="badge badge-primary mr-2"
                      onClick={() => this.updatePublished(false)}>
                        UnPublish
                    </button>) : 
                    (<button
                      className="badge badge-primary mr-2"
                      onClick={() => this.updatePublished(true)}>
                        Publish
                    </button>)}
                    <button
                      className="badge badge-danger mr-2"
                      onClick={this.deleteTutorial}>
                        Delete
                    </button>
                    <button
                      type="submit"
                      className="badge badge-success"
                      onClick={this.updateTutorial}>
                        Update
                    </button>
                    <p>{this.state.message}</p>
                </div>) : 
                (<div>
                    <br />
                    <p>Please click on a Tutorial...</p>
                </div>)
                }
            </div>
        );
    }
}