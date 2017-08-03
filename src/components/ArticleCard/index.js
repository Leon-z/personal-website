/**
 * Created by linzhou on 2017/8/3.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import  moment from 'moment';
import style from './index.scss';

const ArticleCard = ({banner, categories, description, title, create_time,_id}) => (
    <Link to={`/article/${_id}`}>
        <article className={style.root}>
            <div className={style.bg} style={{backgroundImage:`url(${banner})`}}/>
            <p className={style.info}>
                <span>{moment(create_time).format('MM Do YYYY')}</span>
                {categories.map((category)=>{
                    return <Link key={category._id} to={`/category/${category.name}`} className={style.category}>{category.name}</Link>
                })}
            </p>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
            <button className={style.button}>READ MORE</button>
        </article>
    </Link>
);

export default ArticleCard
