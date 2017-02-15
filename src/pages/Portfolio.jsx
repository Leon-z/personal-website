import React from 'react';
import Banner from '../components/Banner';
import 'styles/Portfolio.scss';
class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="p-portfolio ">
                <Banner
                    imgURL={require('../images/banner_home.jpg')}
                    title="Portfolio"
                    detail="there are some work "
                />
                <div className="about-container clearfix">

                </div>
            </div>
        )
    }
}
export default Portfolio;
