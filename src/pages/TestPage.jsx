import React from 'react';
import BlogShortItem from '../components/BlogShortItem';
import 'styles/Test.scss';
import data from '../source/mockData';
import {formatTime} from '../utils/functions';
class Test extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state={
            data:null,
            loaded:false
        }
    }
    componentDidMount(){

    }

    render() {
        console.log(data);
        //先通过时间关系给数据排序
        let List=data.sort((a,b)=>new Date(a.date)<new Date(b.date)).map((value)=>{
            let time=formatTime(value.date);
            return <BlogShortItem
                key={time}
                title={value.title}
                introduction={value.value}
                time={time}
                url='http://www.baidu.com'
                />
        });
        return (
            <div>
                {List}
            </div>
        )
    }
}
export default Test;
