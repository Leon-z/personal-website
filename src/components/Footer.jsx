import React from 'react';
import SocialLink from './SocialLink';
import 'styles/Footer.scss';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);

    }

    render() {
        return (
            <footer className="c-footer">
                <SocialLink/>
                <p className="footer-copyright">
                    Copyright &copy;2017
                    <br/>
                    Theme by Hux | Code with reactjs & nodejs
                </p>
            </footer>
        )
    }
}

export default Footer;
