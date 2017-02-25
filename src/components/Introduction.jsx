import React from 'react';

import ReactMarkdown from 'react-markdown';
import {parse} from 'marked';
import {formatMarkdown} from '../utils/functions';

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
        let formatMd =formatMarkdown(parse(require('../source/introduction.md')));

        return (
            <ReactMarkdown className='markdown-body' source={formatMd}/>
        )
    }
}

export default Introduction;
