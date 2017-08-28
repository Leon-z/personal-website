import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import Router from './router';
const store = configureStore();

//js加载完毕 移除loading。
!(function () {
    const node = document.querySelector('#app .web_loading');
    node.className+=' fade_out';
})();

setTimeout(()=>{
    ReactDOM.render((
        <Provider store={store}>
            <Router />
        </Provider>
    ), document.getElementById('app'));
},1000);
