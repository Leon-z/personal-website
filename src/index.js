import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './router';

ReactDOM.render((
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
        {routes}
    </Router>
), document.getElementById('app'));
