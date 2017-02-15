import React from 'react';
import ReactMarkdown from 'react-markdown'

const introduction =require('../source/introduction.md');


import 'styles/Introduction.scss';
import 'styles/markdown.scss';
class Introduction extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
    }

    render() {
        return (
            <ReactMarkdown className='markdown-body' source={introduction}/>
        )
    }
}

export default Introduction;
