import React from 'react';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import Introduction from '../components/Introduction/Introduction';
import 'styles/Test.scss';

class Test extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state = {
            data: null,
            loaded: false
        }
    }

    componentDidMount() {
    }

    render() {

        return (
            <div>

            </div>

        )
    }
}
export default Test;
