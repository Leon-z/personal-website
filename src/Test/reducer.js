/**
 * Created by bizpies on 2016/12/19.
 */
import appReducer from './AppReducer';
import { combineReducers } from 'redux'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    counter:appReducer
})
export default rootReducer
