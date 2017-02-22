import React from 'react';
import 'styles/Banner.scss';
class Banner extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {title,detail,imgURL} =this.props;
        return (
            <div className="c-banner" style={{backgroundImage:`url(${imgURL})`}}>
                <div className="banner-content">
                    <h1 className="content-title">{title}</h1>
                    <p className="content-detail">{detail}</p>
                </div>
                {this.props.children}


            </div>
        )
    }
}
export default Banner;
