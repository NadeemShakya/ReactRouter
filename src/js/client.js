
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Layout from './components/Layout';
import Header from './components/Header';
import {HashRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
export default class Home extends Component {
  render() {
    return(
      <HashRouter>
        <div class = "mainWrapper">
            <Header />
            <Navigation />
            <Layout />
        </div>
      </HashRouter>

    );
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Home />, app);
