require('styles/IFETask.scss');
import React from 'react';
var aqiData = [
  ['北京', 90],
  ['上海', 50],
  ['福州', 10],
  ['广州', 50],
  ['成都', 90],
  ['西安', 100]
];
var IFETask_2 = React.createClass({
	getInitialState: function() {
		return {
			isReady: 0,
			aqiSelectList:[]
		};
	},
	componentDidMount() {
		this.selectData(60);
	},
	selectData(key){
		var aqiSelectList=aqiData.map((value)=>{
			if (value[1]>key) {
				return value
			}
		})
		this.setState({
			aqiSelectList: aqiSelectList,
			isReady:1
		});
	},
	render: function() {
		var aqiList=this.state.aqiSelectList.map((value,item)=>{
			if(value!=null){return <li>{`${value[0]},空气质量：${value[1]}`}</li>}
		});
		return (
			<div>		
				{this.state.isReady?<h3>空气质量指数大于60的城市</h3>:<h3>污染城市列表</h3>}
				<ul id="aqi-list">
				{this.state.isReady?aqiList:null}
				</ul>
			</div>
		);
	}
});
export default IFETask_2;
