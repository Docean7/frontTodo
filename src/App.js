import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Todo from './components/ToDo';
import Register from './containers/Register';
import Login from './containers/Login';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
                    <>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route path="/register" component={Register}/>
                        </Switch>
                        <PrivateRoute path="/todo" component={Todo}/><br/>
                    </>
                </Router>

            </div>
        );
    }
}

export default connect(state => ({state}))(App);
