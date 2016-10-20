require('styles/IFETask.scss');
import React from 'react';
var IFETask_3 = React.createClass({
	getInitialState: function() {
		return {
			data:[],
			isSort:0 
		};
	},
	componentDidMount() {
		var strArr=[].map.call(this.refs.data.children,(value)=>{

			return [value.innerText.slice(0,value.innerText.indexOf('空')),value.innerText.slice(value.innerText.indexOf('：')+1)]
		})
		strArr.sort(function (a,b) {
			return a[1]-b[1]
		})
		console.log(strArr)
		this.setState({
			data: strArr
		});
	},
	//排序算法
	handleSort(){
		this.setState({
			isSort:1 
		});
	},
	render: function() {
		var sortArr=this.state.data.map((value,item)=>{
			return <li key={item}>{value[0]}空气质量：<b>{value[1]}</b></li>
		})
		return (
			<div>
				<ul id="source" ref="data">
					<li>北京空气质量：<b>90</b></li>
					<li>上海空气质量：<b>70</b></li>
					<li>天津空气质量：<b>80</b></li>
					<li>广州空气质量：<b>50</b></li>
					<li>深圳空气质量：<b>40</b></li>
					<li>福州空气质量：<b>32</b></li>
					<li>成都空气质量：<b>90</b></li>
				</ul>
				<ul id="resort">
					{this.state.isSort?sortArr:null}
				</ul>
				<button id="sort-btn" onClick={this.handleSort}>排序</button>
			</div>
		);
	}
});
export default IFETask_3;
