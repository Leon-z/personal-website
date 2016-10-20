require('normalize.css/normalize.css');
require('styles/Main.scss');
import React from 'react';
import Header from './Header';
import IFETask_4 from './IFEtask/IFETask_4.js';


var Main = React.createClass({
	render: function() {
		return (
			<div className="g-main">
				<Header/>
				<IFETask_4/>
			</div>
		);
	}
});
export default Main;