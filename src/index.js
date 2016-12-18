import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main';
import TestPage from './pages/TestPage';
import { Router, Route} from 'react-router';
import { hashHistory } from 'react-router'
ReactDOM.render((
  <Router history={hashHistory}>
    
{/* <Route path="/" component={Main}> */}
    <Route path="/" component={TestPage}>
    	{/*<IndexRoute component={Header} />*/}
    </Route>
  </Router>
), document.getElementById('app'));
