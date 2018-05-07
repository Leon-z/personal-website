import React from 'react';
import SocialLink from '../SocialLink/SocialLink';
import style from './Footer.scss';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);

    }

    render() {
        return (
            <footer className={style.root} data-role="footer">
                <SocialLink/>
                <p className={style.copyright}>
                    Copyright &copy;2017
                    <br/>
                    <a href="http://www.miitbeian.gov.cn">粤ICP备16064302号</a>
                </p>
            </footer>
        )
    }
}

export default Footer;
