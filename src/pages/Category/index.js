/**
 * Created by linzhou on 2017/7/23.
 */
import React from 'react';
import {Link} from 'react-router-dom';

import connectComponent from '../../store/connectComponent';
import {formatTimestamp} from '../../utils/index';
import Banner from '../../components/Banner/Banner';
// // import Loading from '../../components/Loading';

import style from './index.scss';

class Category extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state = {
            loaded: false,
            err: null,
            data: {},
        }
    }

    componentDidMount() {
        this.getArticleList()
    }

    render() {
        const {loaded, data} = this.state;
        const {match: {params: {name,}}} = this.props;

        return (
            <div className={style.root}>
                <Banner
                    imgURL={require('../../images/banner_home.png')}
                    title="Leon"
                    detail={`这里有我对『 ${name} 』的思考和探索`}
                />
                <ul className={style.list}>
                    {loaded &&data.articles.map((article) => (
                        <Link  to={`/article/${article._id}`} key={article._id}>
                            <li className={style.item}>
                                <span className={style.title}>{article.title}</span>
                                <span className={style.time}>{formatTimestamp(article.create_time,'MM/DD/YYYY')}</span>
                            </li>
                        </Link>
                    )) }
                </ul>

            </div>
        )
    }

    getArticleList = () => {
        const {actions: {categoryGetArticles}, match: {params: {name,}}} = this.props;
        categoryGetArticles({
            params: {name,},
            resolved: res => {
                if (res) {
                    this.setState({
                        data: res.obj,
                        loaded: true
                    })
                }
            },
            reject: err => {
                this.setState({
                    loaded: true,
                    err: true,
                })
            }
        })
    }
}
export const LayoutComponent = Category;
export function mapStateToProps(state) {
    return {}
}
export default connectComponent({mapStateToProps,LayoutComponent})
