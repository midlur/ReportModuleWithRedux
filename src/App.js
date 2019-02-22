import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import Calender from "./Components/calender";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Report View</h1>
          <div className="calender">
            <h5>Select you Date</h5>
            <Calender data={this.state.data} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
