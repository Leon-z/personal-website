import React from 'react';
import Banner from '../../components/Banner/Banner';
import Introduction from '../../components/Introduction/Introduction';
import AboutMeCard from '../../components/AboutMeCard/AboutMeCard';
import './About.scss';
class About extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
    }
    render() {
        let mixHeight = window.screen.availHeight;//让页面最小高度等于电脑高度
        return (
            <div className="p-about " style={{minHeight: mixHeight}}>
                <Banner
                    imgURL={require('../../images/banner_home.png')}
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
