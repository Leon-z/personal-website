import React from 'react';
import ReactMarkdown from 'react-markdown';


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
            <ReactMarkdown className='markdown-body' source={require('../source/introduction.md')}/>
        )
    }
}

export default Introduction;
