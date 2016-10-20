require('styles/IFETask.scss');
import React from 'react';
var IFETask_1 = React.createClass({
	getInitialState: function() {
		return {
			weatherValueList:null,
			Data:[]
		};
	},
	handleChange(){
		this.setState({
			weatherValueList: this.refs.weather.value
		});
	},
	handleSubmit(e){
		e.preventDefault();
		var newData=this.state.Data.concat(this.refs.weather.value);
		this.refs.weather.value='';
		this.setState({
			Data: newData
		});

	},
	render: function() {
		var DataList=this.state.Data.map((value,item)=><li key={item}>{value}</li>)
		return (
			<div className="task-1">
				<form onSubmit={this.handleSubmit}>请输入北京今天空气质量：
					<input id="aqi-input" type="text" ref="weather" onChange={this.handleChange}/>
	  				<button >确认填写</button>
	  			</form>
				<div>您输入的值是：
					{this.state.weatherValueList?<span className="item">{this.state.weatherValueList}</span>:<span>尚无录入</span>}
				</div>
				{this.state.Data.length?<ul><h3>已经录入的值</h3>{DataList}</ul>:null}
			</div>
		);
	}
});
export default IFETask_1;
