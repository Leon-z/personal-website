import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../pages/App';
import Test from '../pages/TestPage';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
export default (
    <Route path="/" component={App}>
        {/*<Route path="/" component={Test}>*/}
        <IndexRoute component={Home}/>
        {/*<Route path="blog" component={Blog}/>*/}
        <Route path="portfolio" component={Portfolio}/>
        <Route path="about" component={About}/>
    </Route>
)