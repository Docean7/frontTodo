import {Redirect, Route} from "react-router-dom";
import {getToken} from "../utils/tokenUtils";
import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            getToken() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;