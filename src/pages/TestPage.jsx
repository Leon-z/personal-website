import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import Introduction from '../components/Introduction';
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
                <PortfolioCard
                    title="Yanshuo.io (演说.io)"
                    time="2016.06"
                    tags={['react','vue','balblab']}
                    cover={require('../images/banner_home.jpg')}
                    detials='使用react做为主要开发框架，react-router作为路由控制，数据通过redux统一缓存至数据管道 '
                    url="www.baidu.com"
                    newWindow={false}
                />
                <PortfolioCard
                    title="Yanshuo.io (演说.io)"
                    time="2016.06"
                    tags={['react','vue','balblab']}
                    cover={require('../images/banner_home.jpg')}
                    detials='使用react做为主要开发框架，react-router作为路由控制，数据通过redux统一缓存至数据管道 '
                    url="www.baidu.com"
                    newWindow={false}
                />
                <PortfolioCard
                    title="Yanshuo.io (演说.io)"
                    time="2016.06"
                    tags={['react','vue','balblab']}
                    cover={require('../images/banner_home.jpg')}
                    detials='使用react做为主要开发框架，react-router作为路由控制，数据通过redux统一缓存至数据管道 '
                    url="www.baidu.com"
                    newWindow={false}
                />
            </div>

        )
    }
}
export default Test;
