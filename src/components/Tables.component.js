import React, {Component} from "react";
import fullDataService from "../services/data.service";
import {Link} from "react-router-dom";

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.getTable = this.getTable.bind(this);
    this.setActiveHH = this.setActiveHH.bind(this);

    this.state = {
      households: [],
      currentHH: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    let formid = this.props.match.params.formid;
    let tbName = this.props.match.params.datatype;
    this.getTable(formid, tbName);
  }

  getTable(formID, tbName) {
    fullDataService.get(formID, tbName)
      .then(res => {
        this.setState({
          households: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  setActiveHH(household, index) {
    this.setState({
      currentHH: household,
      currentIndex: index
    });
  }

  render() {
    const {households, currentHH, currentIndex} = this.state;
    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Households List</h4>
          <ul className="list-group">
            {households &&
              households.map((household, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveHH(household, index)}
                  key={index}>
                  {household.data.id_hh}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentHH ?
            (<div>
              <h4>Project</h4>
              {currentHH.dataType === "processed_data" ?
                <div>
                  <label>
                    <strong>information:</strong>
                  </label>
                  <ul className="list-wzj">
                    {currentHH &&
                      <li className="list-wzj-item" >
                        {"foodshortagetime_months_which  :  " + currentHH.data.foodshortagetime_months_which}
                      </li>
                    }
                  </ul>
                </div> :
                <div>
                  <label>
                    <strong>information:</strong>
                  </label>
                </div>
              }
              <div>
                <label>
                  <strong>cols:</strong>
                </label>
                <ul className="list-wzj">
                  {currentHH && Object.entries(currentHH.data).map((entry, index) => (
                    <li
                      className="list-wzj-item"
                      key = {index}>
                      {entry[0] + "  :  " + entry[1]}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={"/projects/"}
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