/**
 * Created by linzhou on 2017/7/23.
 */
import React from 'react';
import {Link} from 'react-router-dom';

import {formatTimestamp} from '../../utils/index';
import connectComponent from '../../store/connectComponent';
import Banner from '../../components/Banner/Banner';

import style from './index.scss';
import  '../../styles/ghmd.css';

class Article extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state = {
            loaded:false,
            err:null,
            data:{},
        }
    }

    componentDidMount() {
        this.getArticleDetail();
    }

    render() {
        const{
            loaded,
            data:{banner,title,create_time,categories,content,visitors}
        } = this.state;

        //没有加载完渲染loading界面
        if(!loaded)return Article.renderLoadingPage();

        return (
            <div className={style.root}>
                <Banner
                    imgURL={banner}
                />
                <article className={style.article}>
                    <h3 className={style.title}>{title}</h3>
                    <p className={style.info}>
                        <span className={style.time}>{formatTimestamp(create_time,'MM/DD/YYYY')}</span>
                        {categories.map(category=>(
                            <Link to={`/category/${category.name}`} className={style.category} key={category._id}>{category.name}</Link>
                        ))}
                        <span className={style.visitors}>访问人数： {visitors}</span>
                    </p>
                    <div dangerouslySetInnerHTML={{__html: content}} className={`markdown-body ${style.main}`}/>
                </article>
            </div>
        )
    }
    static renderLoadingPage(){
        return (
            <div className={style.root}>
                <div className={style.banner} />
            </div>
        )
    }
    getArticleDetail=()=>{
        const {
            match:{
                params:{id}
            },
            actions:{articleGetDetail}
        }= this.props;
        if(!id)re
        window.gtag('set', 'page', `article/${id}`);
        window.gtag('send', 'pageview');
        articleGetDetail({
            params:{id,},
            resolved:res=>{
                if(res){
                    this.setState({
                        loaded:true,
                        err:null,
                        data:res.obj,
                    })
                }
            },
            rejected:err=>this.setState({loaded:true, err:true, data:{}})
        })
    }
}

export const LayoutComponent = Article;
export function mapStateToProps(state) {
    return {}
}
export default connectComponent({mapStateToProps,LayoutComponent})
