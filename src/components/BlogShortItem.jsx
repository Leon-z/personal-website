import React from 'react';
import 'styles/BlogShortItem.scss';
class BlogShortItem extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {title,introduction,time,url}=this.props;
        return (
            <section className="c-blogShort">
                <a href={url} >
                    <h5 className="blog-title">{title}</h5>
                    <p className="blog-slice">{introduction}</p>
                </a>
                <p className="blog-info">{`Posted by Leon on ${time}`}</p>
            </section>
        )
    }
}

export default BlogShortItem;
