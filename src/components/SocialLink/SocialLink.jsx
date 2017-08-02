import React from 'react';
import style from './SocialLink.scss';
const SocialLink = ( ) =>
    <div className={style.root} data-role="social-link">
        <a href="https://coding.net/u/Leon-z" className={style.icon+ ' '+ style.coding}>&#xe501;</a>
        <a href="https://github.com/Leon-z" className={style.icon+ ' '+ style.git}>&#xe691;</a>
        <a href="https://www.zhihu.com/people/kongfu_bear/activities" className={style.icon+ ' '+ style.zhihu}>&#xe634;</a>
        <a href="mailto:lz_n10828@163.com" className={style.icon+ ' '+ style.email}>&#xe62e;</a>
        <i className="fa fa-deaf"/>
    </div>
export default SocialLink;
