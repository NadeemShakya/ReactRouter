import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return(
            <div className = 'navigationDiv'>                
            <ul>
                <li><NavLink exact to = '/'>Home</NavLink></li>
                <li><NavLink to = '/archives'>Archives</NavLink></li>
                <li><NavLink to = '/settings'>Settings</NavLink></li>
             </ul>
            </div>
        );
    }
}
