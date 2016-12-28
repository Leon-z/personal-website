require('normalize.css/normalize.css');
require('styles/Main.scss');
import React from 'react';
import Header from './Header';
import App from '../Test/App'
import Btn from '../Test/Btn'

var Main = React.createClass({
	render: function() {
		return (
			<div className="g-main">
				{/*<Header/>*/}
                <App/>
                <Btn ref={ref=>this.btn=ref}/>
			</div>
		);
	}
});
export default Main;
