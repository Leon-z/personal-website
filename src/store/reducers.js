import { combineReducers } from 'redux';
import Home from '../pages/Home/HomeReducer';


export default combineReducers({ //把几个reducer合成一个reducer。
    Home,
});
