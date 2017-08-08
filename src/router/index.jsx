import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import connectComponent from '../store/connectComponent';
import {withRouter} from 'react-router';
import * as App from '../pages/App';
import * as Home from '../pages/Home';
import * as Article from '../pages/Article';
import * as Portfolio from '../pages/Portfolio';
import * as Category from '../pages/Category';

const Root = withRouter(connectComponent(App));

// // const Home = (location, callback) => {
// //     require.ensure([], require => {
// //         callback(null, connectComponent(require('../page/Home/')))
// //     },'Home')
// // };
const RouteConfig = () => (
    <Router>
        <Root>
            <Route exact path="/" component={connectComponent(Home)}/>
            <Route path="/article/:id" component={connectComponent(Article)}/>
            {/*<Route path="/portfolio" component={connectComponent(Portfolio)}/>*/}
            <Route path="/category/:name" component={connectComponent(Category)}/>
        </Root>
    </Router>
)

export default RouteConfig
