require('styles/Header.scss');
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
var Header = React.createClass({
	render: function() {
		return (
			<ReactCSSTransitionGroup
				transitionName="example"
				transitionEnterTimeout={5000}
				transitionLeaveTimeout={3000}
				transitionAppear={true} 
				transitionAppearTimeout={500}
				transitionLeave={false}
			>
				<header className="m-header" key="header">
					<section className="g-wrap">
						<div className="logo"></div>
						<nav className="header-nav clearfix" >
							<div className="home item">首页</div>
							<div className="blog item">博客</div>
							<div className="work item">项目</div>
							<div className="about item">关于我</div>
						</nav>
					</section>
				</header>
			</ReactCSSTransitionGroup>
		);
	}
});
export default Header;