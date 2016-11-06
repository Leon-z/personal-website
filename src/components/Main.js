require('normalize.css/normalize.css');
require('styles/Main.scss');
import React from 'react';
import Header from './Header';
import IFETask_7 from './IFEtask/IFETask_7.js';


var Main = React.createClass({
	render: function() {
		return (
			<div className="g-main">
				<Header/>
				<IFETask_7/>
			</div>
		);
	}
});
export default Main;