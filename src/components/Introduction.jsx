import React from 'react';

import ReactMarkdown from 'react-markdown';

import marked from 'marked';
import Highlight from 'highlight.js'

import 'styles/Introduction.scss';
import 'styles/markdown.scss';

class Introduction extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
componentWillMount(){
    var marked = require('marked');

    var markdownString = require('../source/introduction.md');



// Using async version of marked
    marked(markdownString, function (err, content) {
        if (err) throw err;
        console.log(content);
    });

// Synchronous highlighting with highlight.js
    marked.setOptions({
        highlight: function (code) {
            return require('highlight.js').highlightAuto(code).value;
        }
    });

    this.setState({
        data:marked(markdownString)
    })
}
    render() {
        return (
            <ReactMarkdown className='markdown-body' source={this.state.data}/>
        )
    }
}

export default Introduction;
