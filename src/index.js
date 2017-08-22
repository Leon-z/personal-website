import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import Router from './router';
const store = configureStore();


!(function () {
    const node = document.querySelector('#app .web_loading');

    console.log(node.className+=' fade_out');
})();

setTimeout(()=>{
    ReactDOM.render((
        <Provider store={store}>
            <Router />
        </Provider>
    ), document.getElementById('app'));
},300);
