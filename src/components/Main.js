require('normalize.css/normalize.css');
require('styles/Main.scss');
import React from 'react';
import Header from './Header';
import IFETask_6 from './IFEtask/IFETask_6.js';


var Main = React.createClass({
	render: function() {
		return (
			<div className="g-main">
				<Header/>
				<IFETask_6/>
			</div>
		);
	}
});
export default Main;