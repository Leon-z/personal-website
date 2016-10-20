require('styles/IFETask.scss');
import React from 'react';
var IFETask_4 = React.createClass({
	render: function() {
		return (
			<div>
				<div>
				<label>城市名称：<input id="aqi-city-input" type="text"/></label><br/>
					<label>空气质量指数：<input id="aqi-value-input" type="text"/></label><br/>
					<button id="add-btn">确认添加</button>
				</div>
				<table id="aqi-table">
					<tr>
						<td>城市</td><td>空气质量</td><td>操作</td>
					</tr>
					<tr>
						<td>北京</td><td>90</td><td><button>删除</button></td>
					</tr>
					<tr>
						<td>北京</td><td>90</td><td><button>删除</button></td>
					</tr>
				</table>
			</div>
		);
	}
});
export default IFETask_4;
