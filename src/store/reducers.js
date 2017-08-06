import { combineReducers } from 'redux';

import Home from '../pages/Home/HomeReducer';
import Article from '../pages/Article/ArticleReducer';


export default combineReducers({ //把几个reducer合成一个reducer。
    Home,
    Article,
});
