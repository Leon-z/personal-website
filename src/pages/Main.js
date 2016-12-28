require('normalize.css/normalize.css');
require('styles/Main.scss');
import React from 'react';
<<<<<<< HEAD:src/components/Main.js
import Header from './Header';
import App from '../Test/App'
import Btn from '../Test/Btn'
=======
import Header from '../components/Header.js';

>>>>>>> d2d68f5acd263c2affecf2eb6fff3e4dd401a288:src/pages/Main.js

var Main = React.createClass({
	render: function() {
		return (
			<div className="g-main">
<<<<<<< HEAD:src/components/Main.js
				{/*<Header/>*/}
                <App/>
                <Btn ref={ref=>this.btn=ref}/>
=======
				<Header/>
>>>>>>> d2d68f5acd263c2affecf2eb6fff3e4dd401a288:src/pages/Main.js
			</div>
		);
	}
});
export default Main;
