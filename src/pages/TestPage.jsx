import React, { Component, PropTypes } from 'react';

class  TestPage extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state={
        	a:2
        }
    }

    handleClick(){console.log(this)}

    render() {
        return (
           <div onClick={this.handleClick}>
           	sasfd
           </div> 
        );
    }
}

export default  TestPage;
