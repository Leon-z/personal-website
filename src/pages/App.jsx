import React from 'react';
import Header from '../components/Header'
import 'styles/App.scss';
//引入reset
import 'normalize.css/normalize.css';
import 'styles/reset.scss'
class App extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="g-app">
                <Header />
                {this.props.children}
            </div>
        )
    }
}
export default App;
