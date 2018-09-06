
import React, { Component } from 'react';
import ReactDOM from "react-dom";

export default class Home extends Component {
  render() {
    return(
      <h1>Welcome to React Router Tutorial </h1>
    );
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Home />, app);
