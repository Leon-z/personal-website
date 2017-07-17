import React from 'react';
import {Link} from 'react-router';

import SocialLink from '../SocialLink/SocialLink';

import './AboutMeCard.scss';
import photo from '../../images/phtoto.jpg'


class AboutMeCard extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <section className="c-about">
                <hr/>
                <h5 className="about-title">
                    <Link to="/about" >ABOUT ME</Link>
                </h5>
                <div className="about-photo">
                    <img src={photo} alt="my-self"/>
                </div>
                <p className="about-introduction">When you reach for the stars you may not quite get one,but you won't come up with a handful of mud either.</p>
                <SocialLink/>
            </section>
        )
    }
}

export default AboutMeCard;
