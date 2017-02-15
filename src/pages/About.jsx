import React from 'react';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import AboutMeCard from '../components/AboutMeCard';
import 'styles/About.scss';
class About extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="p-about ">
                <Banner
                    imgURL={require('../images/banner_home.jpg')}
                    title="About"
                    detail="Hi,this is Leon"
                />
                <div className="about-container clearfix">
                    <article className="about-article">
                        <Introduction />
                    </article>
                    <aside className="about-aside">
                        <AboutMeCard/>
                    </aside>
                </div>
            </div>
        )
    }
}
export default About;
