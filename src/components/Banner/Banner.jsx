import React from 'react';
import style from './Banner.scss';
class Banner extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {title,detail,imgURL} =this.props;
        return (
            <div className={style.root} style={{backgroundImage:`url(${imgURL})`}}>
                <div className={style.content}>
                    <h1 className={style.title}>{title}</h1>
                    <p className={style.detail}>{detail}</p>
                </div>
                {this.props.children}
            </div>
        )
    }
}
export default Banner;
