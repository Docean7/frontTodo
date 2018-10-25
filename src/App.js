import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Todo from './components/ToDo';
import Register from './containers/Register';
import Login from './containers/Login';
import { connect } from 'react-redux';
import './App.css';
import PrivateRoute from './utils/PrivateRoute';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route path="/register" component={Register}/>
                        </Switch>
                        <PrivateRoute path="/todo" component={Todo}/>
                    </div>
                </Router>

            </div>
        );
    }
}

export default connect(state => ({state}))(App);
