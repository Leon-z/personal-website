require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

var md =require('../blog/上海科技大学2016新生手册.md')
class AppComponent extends React.Component {
  render() {
    console.log(typeof md);
    return (
		<div className="index">
			<div className="box1"></div>
		</div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
