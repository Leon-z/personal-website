import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import connectComponent from '../store/connectComponent';
import {withRouter} from 'react-router';
import * as App from '../pages/App';

const Root = withRouter(connectComponent(App));

const RouteConfig = () => (
    <Router>
        <Root/>
    </Router>
);

export default RouteConfig
