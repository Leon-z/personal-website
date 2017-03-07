import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.handleClick=this.handleClick.bind(this);
        this.state = {name: 'World'}
    }

    handleClick() {
        this.setState({name: 'World 2'})
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                Hello {this.state.name}
            </div>
        )
    }
}

export default App
