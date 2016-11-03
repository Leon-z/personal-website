require('styles/IFETask.scss');
import React from 'react';
var IFETask_4 = React.createClass({
	getInitialState: function() {
		return {
			aqiDataArr:[]//空气质量数组，{city:'',value:0} 
		};
	},
	/**
	 * 点击add-btn时的处理逻辑
	 * 获取用户输入，更新数据，并进行页面呈现的更新
	 */
	addData(){
		//用户输入的城市名必须为中英文字符，空气质量指数必须为整数
		var city=this.refs.city.value,aqi=this.refs.aqi.value;
		var cityOk=!(/[^a-zA-Z\u4e00-\u9fa5]/i.test(city)),aqiOk=!(/[^0-9]/i.test(aqi));
		if(cityOk&&aqiOk){
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
		}else if(!cityOk&&!aqiOk){
			alert('城市名必须为中英文字符,并且空气质量指数必须为整数');
		}else if(!cityOk){
			alert('城市名必须为中英文字符');
		}else{
			alert('空气质量指数必须为整数');
		}
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
