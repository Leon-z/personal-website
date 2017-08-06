/**
 * Created by linzhou on 2017/7/23.
 */
import React from 'react';

import Banner from '../../components/Banner/Banner';
import ArticleCard from '../../components/ArticleCard';
import Pagination from '../../components/Pagination';
// import AboutMeCard from '../../components/AboutMeCard/AboutMeCard';
import {parse,stringify} from '../../utils/index';

import style from './index.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state={
            articles:[]
        }
    }
    componentDidMount(){
        const {page} = parse(this.props.location.search);
        this.getArticleData(page-1||0)
    }
    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location;

        if(locationChanged){
            const {page} = parse(nextProps.location.search);
            this.getArticleData(page-1||0)
        }
    }
    render() {
        const {articles}= this.state;
        const {
            location:{search},
        }= this.props;
        const  {page} =parse(search);
        let mixHeight = window.screen.availHeight;//让页面最小高度等于电脑高度
        return (
            <div className={style.root} style={{minHeight: mixHeight}}>
                <Banner
                    imgURL={require('../../images/banner_home.png')}
                    title="Leon"
                    detail="没有比思考更复杂的享受"
                >
                </Banner>
                <div className={style.articles}>
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
                </div>
                <div className={style.pagination}>
                    <Pagination
                        current={page}
                        pageSize={10}
                        total={11}
                        onPreClick={this.onPreClick}
                        onNextClick={this.onNextClick}
                    />
                </div>

            </div>
        )
    }
    onPreClick=()=>{
        const {
            history:{replace},
            location:{search},
            match:{path}
        }= this.props;
        let params =parse(search);

        params.page--;
        replace(path+'?'+stringify(params))
    };
    onNextClick=()=>{
        const {
            history:{push},
            location:{search},
            match:{path}
        }= this.props;
        let params =parse(search);

        params.page?params.page++:params.page=2;
        push(path+'?'+stringify(params))
    };
    getArticleData=(page)=>{
        const {homeGetArticlesList} = this.props.actions;
        homeGetArticlesList({
            params:{
                page_size:10,
                page_number:page
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
    };
}

export const LayoutComponent = Home;
export function mapStateToProps(state) {
    return {

    }
}

