require('styles/IFETask.scss');
import React from 'react';
var IFETask_6 = React.createClass({
	getInitialState: function() {
		return {
			queueArr: this.randomArray(10,10,100),
			queueCancelArr:[],
			onSelect:0,
			onMatch:[0,0]
		};
	},
	/**
	 * 随机数生成
	 * @param  {[num]} length [需要随机数的个数]
	 * @param  {[num]} min    [随机数最小值]
	 * @param  {[num]} max    [随机数最大值]
	 * @return {[arr]}        [生成的随机数组成的数组]
	 */
	randomArray(length,min,max){
		var arr=[];
		for(var i=0;i<length;i++){
			arr.push(Math.floor(Math.random()*(max-min)+min));
		}
		return arr;
	},
	componentDidMount: function() {
		//加载完后自动让输入框获得焦点
		this.refs.input.focus();
	},
	//左进
	queue_first_in(){
		var value=this.refs.input.value;
		if(value==''){
			alert('请输入10~100间的整数');
			return
		}else if(typeof Number(value)!='number'||isNaN(Number(value))){
			alert('请输入数字');
			return
		}else if(Math.floor(value)!=value){
			alert('请输入整数');
			return
		}else if(value>100||value<10){
			alert('请输入10~100间的整数');
			return
		}
		var newQueueArr=this.state.queueArr.concat();
			newQueueArr.unshift(value);
		this.setState({
			queueArr:newQueueArr
		})
	},
	//左出
	queue_first_out(){
		var newQueueArr=this.state.queueArr.concat();
		var cancelNum=newQueueArr.shift();
		var newQueueCancelArr=this.state.queueCancelArr.concat(cancelNum);
		this.setState({
			queueArr:newQueueArr,
			queueCancelArr:newQueueCancelArr
		},alert(cancelNum))

	},
	//右进
	queue_last_in(){
		var value=this.refs.input.value;
		if(value==''){
			alert('请输入10~100间的整数');
			return
		}else if(typeof Number(value)!='number'||isNaN(Number(value))){
			alert('请输入数字');
			return
		}else if(Math.floor(value)!=value){
			alert('请输入整数');
			return
		}else if(value>100||value<10){
			alert('请输入10~100间的整数');
			return
		}
		var newQueueArr=this.state.queueArr.concat();
			newQueueArr.push(value);
		this.setState({
			queueArr:newQueueArr
		})
	},
	//右出
	queue_last_out(){
		var newQueueArr=this.state.queueArr.concat();
		var cancelNum=newQueueArr.pop();
		var newQueueCancelArr=this.state.queueCancelArr.concat(cancelNum);
		this.setState({
			queueArr:newQueueArr,
			queueCancelArr:newQueueCancelArr
		},alert(cancelNum))
	},
	//冒泡排序
	bubbleSort(){
		var sortArr=this.state.queueArr;
		var i=0;
		var j=0;
		setInterval(match.bind(this),100);
		function match() {
			var arr=this.state.queueArr.concat();
			this.setState({
				onSelect:1,
				onMatch:[j,j+1] 
			},function () {
				if(sortArr[j]>sortArr[j+1]){
					sortArr[j]=sortArr[j]+sortArr[j+1]-(sortArr[j+1]=sortArr[j])
				}
				this.setState({
					queueArr: sortArr
				},function () {
					if(j>=sortArr.length-i-2){
						j=0;
						i++;
					}else{
						j++
					}
				});
			});
		}

	},
	render: function() {
		return (
			<div className="task-7">
				<div className="btn-item left" onClick={this.queue_first_in}>左侧入</div>
				<div className="btn-item left" onClick={this.queue_first_out}>左侧出</div>
				<input className="num-input" ref="input" />
				<div className="btn-item right" onClick={this.queue_last_in}>右侧入</div>
				<div className="btn-item right" onClick={this.queue_last_out}>右侧出</div>
				<div className="btn-item right" onClick={this.bubbleSort}>冒泡</div>
				<p>数组</p>
				<QueueShow
					queueArr={this.state.queueArr}
					onSelect={this.state.onSelect}
					onMatch={this.state.onMatch}
				/>
				<p>被删除的数</p>
				<QueueOfCancel queueArr={this.state.queueCancelArr}/>
			</div>
		);
	}
});
//队列显示
var QueueShow=React.createClass({
	getDefaultProps: function() {
		return {
			queueArr:[]//初始空队列
		};
	},
	render: function() {
		var queueList=this.props.queueArr.map((value,item)=>{
			return (
				<li  
					className={this.props.onSelect&&(this.props.onMatch[0]==item||this.props.onMatch[1]==item)?'queue-item match':'queue-item'}
					style={{height:value}}
					key={'queue'+item}
				></li>
			)
		});
		return (
			<ul className="queueArr">
				{queueList}
				<div className="clearfix"></div>
			</ul>
		);
	}
})
//被删除值组成的队列
var QueueOfCancel=React.createClass({
	getDefaultProps: function() {
		return {
			queueArr:[]
		};
	},
	render: function() {
		var queueCancelList=this.props.queueArr.map((value,item)=>{
			return <li className="queue-item cancel" key={'queue'+item}>{value}</li>
		})
		return (
			<div>
				{queueCancelList}
				<div className="clearfix"></div>
			</div>
		);
	}
})
export default IFETask_6;
