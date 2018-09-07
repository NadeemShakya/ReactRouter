import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import Archives from './Archives';
import Settings from './Settings';
import Home from './Home';
export default class Layout extends Component {

    render() {
        return(
            <div class = 'mainDiv'>
                    <Switch>
                        <Route path = '/' component = {Home}/>
                        <Route path = '/archives' component = {Archives}/>
                        <Route path = '/settings' component = {Settings}/>
                    </Switch>
            </div>
        );
    }
}
