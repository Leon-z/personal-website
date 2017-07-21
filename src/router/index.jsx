import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../pages/App/App';

const Home = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../pages/Home/Home').default)
    },'Home')
};
const Portfolio = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../pages/Portfolio/Portfolio').default)
    },'Portfolio')
};
const About = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../pages/About/About').default)
    },'About')
};
export default (
    <Route path="/" component={App}>
        <IndexRoute getComponent={Home}/>
        {/*<Route path="blog" component={Blog}/>*/}
        <Route path="portfolio" getComponent={Portfolio}/>
        <Route path="about" getComponent={About}/>
    </Route>
)
