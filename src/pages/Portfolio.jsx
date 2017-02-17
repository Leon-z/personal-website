import React from 'react';
import Banner from '../components/Banner';
import PortfolioCard from '../components/PortfolioCard';

import 'styles/Portfolio.scss';

import portfolioData from '../source/portfolioData';
class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    render() {
        let mixHeight = window.screen.availHeight;//让页面最小高度等于电脑高度
        return (
            <div className="p-portfolio " style={{minHeight: mixHeight}}>
                <Banner
                    imgURL={require('../images/banner_home.png')}
                    title="Portfolio"
                    detail="there are some projects "
                />
                <div className="portfolio-card">
                    {portfolioData.map((value)=><PortfolioCard
                        key={value.title}
                        title={value.title}
                        time = {value.time}
                        tags={value.tags}
                        cover={value.cover}
                        detials={value.detials}
                        url={value.url}
                        newWindow={value.newWindow}
                    />)}
                </div>
            </div>
        )
    }
}
export default Portfolio;
