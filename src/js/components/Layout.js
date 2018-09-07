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
                        <Route exact path = '/' component = {Home}/>
                        <Route exact path = '/archives' component = {Archives}/>
                        <Route exac path = '/settings' component = {Settings}/>
                    </Switch>
            </div>
        );
    }
}
