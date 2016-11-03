require('styles/IFETask.scss');
import React from 'react';
var IFETask_5 = React.createClass({
	getInitialState: function() {
		return {
			isRandomData: 0
		};
	},
	componentDidMount: function() {
		var  aqiSourceData = {
			'北京': this.randomBuildData(500),
			'上海': this.randomBuildData(300),
			'广州': this.randomBuildData(200),
			'深圳': this.randomBuildData(100),
			'成都': this.randomBuildData(300),
			'西安': this.randomBuildData(500),
			'福州': this.randomBuildData(100),
			'厦门': this.randomBuildData(100),
			'沈阳': this.randomBuildData(500)
		};
		this.setState({
			aqiSourceData: aqiSourceData,
			isRandomData:1,
			city:'北京'
		});
	},
	/**
	 * 随机生成数据
	 * @param  {[数字]} seed [description]
	 * @return {[type]}      [返回1月到3月每天的aqi的对象，键是日期，键值是对应的aqi]
	 */
	randomBuildData(seed){
		var returnData = {};
		var dat = new Date("2016-01-01");
		var datStr = ''
		function getDateStr(dat) {
			var y = dat.getFullYear();
			var m = dat.getMonth() + 1;
			m = m < 10 ? '0' + m : m;
			var d = dat.getDate();
			d = d < 10 ? '0' + d : d;
			return y + '-' + m + '-' + d;
		}
		for (var i = 1; i < 92; i++) {
			datStr = getDateStr(dat);
			returnData[datStr] = Math.ceil(Math.random() * seed);
			dat.setDate(dat.getDate() + 1);
		}
		return returnData;
	},
	//颜色生成写的比较随意了
	randomColorCode(data){
		var r=Math.floor(256-data/500*256);
		var g=Math.floor(256-data/500*256);
		var b=Math.floor(256-data/500*256);
		return "rgb("+r+','+g+','+b+")";
	},
	//监听单选框选中
	handleChecked(e){
		//获取选中日期粒度
		this.setState({
			dateType: e.target.value
		});
	},
	//监听下拉列表
	handleSelect(e){
		this.setState({
			city: e.target.value
		});
	},
	//生成城市选择列表
	_renderCityOption(){
		var cityOptionList=[];
		for(var i in this.state.aqiSourceData){
			cityOptionList.push(<option key={'option'+i} value={i}>{i}</option>)
		}
		return (
			<select id="city-select" onChange={this.handleSelect} >
				{cityOptionList}
			</select>
		)
	},
	//生成 图标
	_renderChart(){
		var data=this.state.aqiSourceData[this.state.city],chartItem=[];
		if(this.state.dateType=='week'){
			var weekDate=[],index=0;
			weekDate[index]=[];
			//提取日期对应的每周第几天，存入数组中，每遇到星期天，数组索引+1
			for(var i in data){
				weekDate[index].push({aqi:data[i]});
				if(new Date(i).getDay()==6){
					index++;
					weekDate[index]=[];
				}
			}
			//遍历每周数据，生成本周对应的平均aqi。（本周aqi之和除以本周天数）
			weekDate.forEach(function (value,item) {
				var aqi=0;
				value.forEach(function (value,item) {
					aqi+=value.aqi;
				})
				aqi/=value.length;
				weekDate[item]=Math.round(aqi);
			})
			chartItem=weekDate.map((value,item)=><div className="item" key={item} style={{height:value,backgroundColor:this.randomColorCode(value)}} title={`2016年第${item+1}周，本周aqi为${value}`}></div>)
		}else if(this.state.dateType==='month'){
			var monthDate=[[],[],[]];
			for(var i in data){
				monthDate[new Date(i).getMonth()].push(data[i])
			}
			monthDate.forEach(function (value,item) {
				var aqi=0;
				value.forEach(function (value) {
					aqi+=value;
				})
				aqi/=value.length;
				monthDate[item]=Math.round(aqi);
			})
			chartItem=monthDate.map((value,item)=><div className="item" key={item} style={{height:value,backgroundColor:this.randomColorCode(value)}} title={`2016年${item+1}月，本月平均aqi为${value}`}></div>)
		}else{
			var dayDate=[];
			for(var i in data){
				dayDate.push({
					date:i,
					aqi:data[i]
				})
			}
			console.log(dayDate)
			chartItem=dayDate.map((value,item)=><div className="item" key={item} style={{height:value.aqi,backgroundColor:this.randomColorCode(value.aqi)}} title={`${value.date}，本日aqi为${value.aqi}`}></div>)
		}
		return (
			<div className="aqi-chart-wrap">
				{chartItem}
			</div>
		)
	},
	render() {
		return (
			<div className="task-5">
				<fieldset id="form-gra_time">
				<legend>请选择日期粒度：</legend>
					<label>日<input name="gra_time" value="day" type="radio" onChange={this.handleChecked} defaultChecked/></label>
					<label>周<input name="gra_time" value="week" type="radio" onChange={this.handleChecked}/></label>
					<label>月<input name="gra_time" value="month" type="radio" onChange={this.handleChecked}/></label>
				</fieldset>
				<fieldset>
					<legend>请选择查看的城市：</legend>
					{this.state.isRandomData?this._renderCityOption():null}
				</fieldset>
				{this.state.isRandomData?this._renderChart():null}
			</div>
		);
	}
});
export default IFETask_5;
