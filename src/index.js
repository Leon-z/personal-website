import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { hashHistory } from 'react-router'
import astore from './Test/store'

const store = astore;


ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main} />
        </Router>
    </Provider>
), document.getElementById('app'));

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main} />
        </Router>
    </Provider>
), document.getElementById('count'));
