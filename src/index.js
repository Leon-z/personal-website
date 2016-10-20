import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Router, Route} from 'react-router';
import { hashHistory } from 'react-router'
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	{/*<IndexRoute component={Header} />*/}
    </Route>
  </Router>
), document.getElementById('app'));
