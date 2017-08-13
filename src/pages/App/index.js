/**
 * Created by linzhou on 2017/8/1.
 */
import React from 'react';
import {Route,} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import  'Styles/reset.scss';
import 'normalize.css/normalize.css';
import styles from './index.scss';
//代码分割组件
import asyncComponent from '../../utils/asyncComponent';

//代码分割
const Home = asyncComponent(() => import(/* webpackChunkName: "home" */ '../Home'));
const Article = asyncComponent(() => import(/* webpackChunkName: "article" */ '../Article'));
const Category = asyncComponent(() => import(/* webpackChunkName: "category" */ '../Category'));
// const Portfolio=asyncComponent(() => import(/* webpackChunkName: "portfolio" */ '../pages/Portfolio'));


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps){

        //当路由切换时
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
    }
    render() {

        return (
            <div className={styles.root}>
                <Header />
                <ReactCSSTransitionGroup
                    transitionName="page-animation"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <div
                        key={this.props.location.pathname}
                    >
                        <Route exact path="/" component={Home}/>
                        <Route path="/article/:id" component={Article}/>
                        {/*<Route path="/portfolio" component={Portfolio}/>*/}
                        <Route path="/category/:name" component={Category}/>
                    </div>

                </ReactCSSTransitionGroup>
                <Footer/>
            </div>

        );
    }
}

export const LayoutComponent = App;
export function mapStateToProps(state) {
    return {
        ...state
    }
}
