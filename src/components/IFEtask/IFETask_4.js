require('styles/IFETask.scss');
import React from 'react';
var IFETask_4 = React.createClass({
	getInitialState: function() {
		return {
			aqiDataArr:[]//空气质量数组，{city:'',value:0} 
		};
	},
	addData(){
		var aqiData=[{
				city:this.refs.city.value,
				value:this.refs.aqi.value
			}],
			newData=this.state.aqiDataArr.concat(aqiData);
		this.refs.city.value='';
		this.refs.aqi.value='';
		this.setState({
			aqiDataArr: newData
		});

	},
	delete(item){
		var arr=[];
		arr=this.state.aqiDataArr;
		arr.splice(item,1)
		this.setState({
			aqiDataArr: arr
		});
	},
	render: function() {
		var aqiArr=this.state.aqiDataArr.map((value,item)=>{
			if(value.city){
				return (
					<tr key={item} >
						<td>{value.city}</td><td>{value.value}</td><td><button onClick={()=>this.delete(item)}>删除</button></td>
					</tr>
				)
			}
		})
		return (
			<div>
				<div>
				<label>城市名称：<input id="aqi-city-input" type="text" ref="city"/></label><br/>
					<label>空气质量指数：<input id="aqi-value-input" type="text" ref="aqi"/></label><br/>
					<button id="add-btn" onClick={this.addData}>确认添加</button>
				</div>
				<table id="aqi-table">
					{aqiArr}
				</table>
			</div>
		);
	}
});
export default IFETask_4;
