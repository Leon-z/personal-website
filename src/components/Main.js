require('normalize.css/normalize.css');
require('styles/Main.scss');
import React from 'react';
import Header from './Header';
import IFETask_5 from './IFEtask/IFETask_5.js';


var Main = React.createClass({
	render: function() {
		return (
			<div className="g-main">
				<Header/>
				<IFETask_5/>
			</div>
		);
	}
});
export default Main;