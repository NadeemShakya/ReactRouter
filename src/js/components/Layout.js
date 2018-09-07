import React, {Component} from 'react'
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import Archives from './Archives';
import Settings from './Settings';
import Home from './Home';
export default class Layout extends Component {

    render() {
        return(
            <div class = 'mainDiv'>
                     {/* We will be placing our router Component Here. */}
            </div>
        );
    }
}
