/**
 * Created by linzhou on 2017/8/3.
 */
import React from 'react';
import {Link} from 'react-router-dom';

import {formatTimestamp} from '../../utils';
import style from './index.scss';

const ArticleCard = ({banner, categories, description, title, create_time, _id,index}) => (

    <article className={style.root} data-role="article-card" style={{animationDelay:`${0.1*index}s`}}>
        <Link to={`/article/${_id}`}>
            <div className={style.bg} style={{backgroundImage: `url(${banner})`}}/>
            <div className={style.wrap}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
                <p className={style.info}>
                    <span className={style.time}>{formatTimestamp(create_time, 'MM/DD/YYYY')}</span>
                    {categories.map((category) => {
                        return <Link key={category._id} to={`/category/${category.name}`}
                                     className={style.category}>{category.name}</Link>
                    })}
                </p>
            </div>
        </Link>
    </article>

);

export default ArticleCard
