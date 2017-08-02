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
            <footer className={style.root}>
                <SocialLink/>
                <p className={style.copyright}>
                    Copyright &copy;2017
                    <br/>
                    Code with react & node
                </p>
            </footer>
        )
    }
}

export default Footer;
