import React from 'react';
import 'styles/Test.scss';
import ReactMarkdown from 'react-markdown';
import ajax from '../Test/ajax';
import {getDataFromMd} from '../utils/functions'


const marked= require('marked');
let md= require('../source/多列布局总结.md');

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
        fetch('./source/多列布局总结.md')
            .then(res=>{
                return  res.text()
            })
        .then(data=> {
            getDataFromMd(data);
            this.setState({
                data:data,
                loaded:true
            });
        });

    }

    render() {
        if (!this.state.loaded) return (<div>load</div>)
        return (
            <dl>
                <ReactMarkdown className="markdown-body" source={this.state.data}/>
            </dl>

        )
    }
}
export default Test;
