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
const Root = withRouter(connectComponent(App));
// // const Home = (location, callback) => {
// //     require.ensure([], require => {
// //         callback(null, connectComponent(require('../page/Home/')))
// //     },'Home')
// // };
const RouteConfig = () => (
    <Router>
        <Root>
            <Route path="/" component={connectComponent(Home)}/>
            {/*<Route path="/a" component={connectComponent(Home)}/>*/}
            {/*<Route path="/b" component={connectComponent(Home)}/>*/}
        </Root>
    </Router>
)

export default RouteConfig
