require('normalize.css/normalize.css');
require('styles/Main.scss');
import React from 'react';
import Header from '../components/Header.js';


var Main = React.createClass({
	render: function() {
		return (
			<div className="g-main">
				<Header/>
			</div>
		);
	}
});
export default Main;