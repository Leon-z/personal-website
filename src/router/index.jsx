import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import connectComponent from '../store/connectComponent';
import {withRouter} from 'react-router';
import * as App from '../pages/App';

//代码分割组件
import asyncComponent from '../utils/asyncComponent';

const Root = withRouter(connectComponent(App));

//代码分割
const Home=asyncComponent(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
const Article=asyncComponent(() => import(/* webpackChunkName: "article" */ '../pages/Article'));
const Category=asyncComponent(() => import(/* webpackChunkName: "category" */ '../pages/Category'));
const Portfolio=asyncComponent(() => import(/* webpackChunkName: "category" */ '../pages/Portfolio'));

const RouteConfig = () => (
    <Router>
        <Root>
            <Route exact path="/" component={Home}/>
            <Route path="/article/:id" component={Article}/>
            {/*<Route path="/portfolio" component={Portfolio}/>*/}
            <Route path="/category/:name" component={Category}/>
        </Root>
    </Router>
)

export default RouteConfig
