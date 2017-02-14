import React from 'react';
import Banner from '../components/Banner';
import AboutMeCard from '../components/AboutMeCard';
import BlogShortItem from '../components/BlogShortItem';
import {formatTime,formatURL} from '../utils/functions';
import 'styles/Home.scss';

import data from '../source/mockData';//用脚本爬来hexo上博客的数据

class Home extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }

    render() {
        let mixHeight = window.screen.availHeight;//让页面最小高度等于电脑高度
        return (
            <div className="p-home" style={{minHeight: mixHeight}}>
                <Banner
                    imgURL={require('../images/banner_home.jpg')}
                    title="Leon"
                    detail="叮叮当当，敲敲键盘"
                />
                <div className="home-container clearfix">
                    <article className="home-article">
                        {/* 首页博客列表 */}
                        {data.sort((a,b)=>new Date(a.date)<new Date(b.date)).map((value)=>{
                            let time=formatTime(value.date);
                            return <BlogShortItem
                                key={time}
                                title={value.title}
                                introduction={value.value}
                                time={time}
                                url={formatURL(value.fileName,value.date)}
                            />
                        })}
                    </article>
                    <aside className="home-aside">
                        <AboutMeCard/>
                    </aside>
                </div>
            </div>
        )
    }
}
export default Home;
