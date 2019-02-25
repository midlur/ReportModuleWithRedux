import React, { Component } from "react";
import { Provider } from "react-redux";
import AddDetails  from './Components/AddDetails';
import UpdateDetails from './Components/UpdateDetails';
import DeleteDetails from './Components/DeleteDetails';

import "./App.css";
import Calender from "./Components/calender";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      render: ""
    };
  }

  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case "addDetails":
        return <AddDetails />;
      case "updateDetails":
        return <UpdateDetails/>;
      case "delete":
        return <DeleteDetails />;
      default:
        return null;
    }
  }
  render() {
    return (
      <Provider store = {store} >
      <div className="App">
        <h1>Report View</h1>
        <div className="calender">
          <h5>Select you Date</h5>
          <Calender data={this.state.data} />
        </div>
        <div className="Btns">
          <button
            type="submit"
            className="btn btn-default"
            onClick={this.handleClick.bind(this, "addDetails")}
          >
            Add Details
          </button>

          <button
            type="submit"
            className="btn btn-default"
            onClick={this.handleClick.bind(this, "updateDetails")}
          >
            Update Details
          </button>
          <button
            type="submit"
            className="btn btn-default"
            onClick={this.handleClick.bind(this, "delete")}
          >
            Delete
          </button>

          {this._renderSubComp()}
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
