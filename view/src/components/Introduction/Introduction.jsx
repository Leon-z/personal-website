import React from 'react';

import ReactMarkdown from 'react-markdown';

import marked from 'marked';
import Highlight from 'highlight.js';

import './Introduction.scss';
import 'styles/markdown.scss';
const markdownString = require('../../source/introduction.md');// 自我介绍

class Introduction extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state={
            source:'# 自我介绍'
        }
    }

    componentWillMount() {
        marked.setOptions({
            highlight: function (code) {
                return Highlight.highlightAuto(code).value;
            }
        });
        this.setState({
            source: marked(markdownString)
        })
    }

    render() {
        return (
            <ReactMarkdown className='markdown-body' source={this.state.source}/>
        )
    }
}

export default Introduction;
