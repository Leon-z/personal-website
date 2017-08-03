/**
 * Created by linzhou on 2017/7/23.
 */
import React from 'react';

import Banner from '../../components/Banner/Banner';
import ArticleCard from '../../components/ArticleCard';
// import AboutMeCard from '../../components/AboutMeCard/AboutMeCard';
import {formatTime,formatURL} from '../../utils/functions';

import data from '../../source/mockData';

class Home extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state={
            articles:[]
        }
    }
    componentDidMount(){
        const {homeGetArticlesList} = this.props.actions;
        homeGetArticlesList({
            params:{
                page_size:10,
                page_number:0
            },
            resolved:res=>{
                if(res){
                    this.setState({
                        articles  : res.obj
                    })
                }
            },
            rejected:res=>console.log(res),
        })
    }
    render() {
        const {articles}= this.state;
        let mixHeight = window.screen.availHeight;//让页面最小高度等于电脑高度
        return (
            <div className="p-home" style={{minHeight: mixHeight}}>
                <Banner
                    imgURL={require('../../images/banner_home.png')}
                    title="Leon"
                    detail="没有比思考更复杂的享受"
                >
                </Banner>
                <div className="home-container clearfix">
                    {articles.map((article)=>(
                        <ArticleCard
                            key={article._id}
                            banner={article.banner}
                            categories={article.categories}
                            description={article.description}
                            title={article.title}
                            create_time={article.create_time}
                            _id={article._id}
                        />
                    ))}
                    <aside className="home-aside">
                        {/*<AboutMeCard/>*/}
                    </aside>
                </div>
            </div>
        )
    }
}

export const LayoutComponent = Home;
export function mapStateToProps(state) {
    return {

    }
}

