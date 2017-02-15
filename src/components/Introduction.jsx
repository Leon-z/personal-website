import React from 'react';
import ReactMarkdown from 'react-markdown'

import marked from 'marked';
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
        console.log(introduction);
        return (
            <ReactMarkdown className='markdown-body' source={marked(introduction)}/>
        )
    }
}

export default Introduction;
