import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Field from "../components/field/field";
import GlobalReducers from "../reducer/global-reducer"

export default props => (
    <Provider store={createStore(GlobalReducers)}>
        <div className="container">
            <Field />
        </div>
    </Provider>
);
