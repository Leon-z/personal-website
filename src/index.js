import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Main from './components/Main';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
=======
import Main from './pages/Main';
import TestPage from './pages/TestPage';
import { Router, Route} from 'react-router';
>>>>>>> d2d68f5acd263c2affecf2eb6fff3e4dd401a288
import { hashHistory } from 'react-router'
import astore from './Test/store'

const store = astore;


ReactDOM.render((
<<<<<<< HEAD
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main} />
        </Router>
    </Provider>
=======
  <Router history={hashHistory}>
    
{/* <Route path="/" component={Main}> */}
    <Route path="/" component={TestPage}>
    	{/*<IndexRoute component={Header} />*/}
    </Route>
  </Router>
>>>>>>> d2d68f5acd263c2affecf2eb6fff3e4dd401a288
), document.getElementById('app'));

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main} />
        </Router>
    </Provider>
), document.getElementById('count'));
