import React from 'react';
import 'styles/Test.scss';
import SectionWraper from '../decorator/SectionWraper'
class Test extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state={
            data:null,
            loaded:false
        }
    }
    componentDidMount(){

    }

    render() {
        return (
            <SectionWraper>

            </SectionWraper>

        )
    }
}
export default Test;
