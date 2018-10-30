import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Todo from './components/ToDo';
import Register from './containers/Register';
import Login from './containers/Login';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <>
            <Router>
                <>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                    <PrivateRoute path="/todo" component={Todo}/>
                </>
            </Router>
        </>
    );

}

export default App;
