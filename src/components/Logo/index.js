/**
 * Created by linzhou on 2017/8/4.
 */
import React from 'react';
import style from './index.scss';

const Logo =()=>(
    <svg viewBox="0 0 800 600" className={style.root}>
        <symbol id="s-text">
            <text
                textAnchor="middle"
                x="50%"
                y="60%"
                className={style.text}
            >Leon</text>
        </symbol>
        <g className={style.ants}>
            <use href="#s-text" className={style.copy}/>
            <use href="#s-text" className={style.copy}/>
            <use href="#s-text" className={style.copy}/>
            <use href="#s-text" className={style.copy}/>
            <use href="#s-text" className={style.copy}/>
        </g>


    </svg>
);
export default Logo;
