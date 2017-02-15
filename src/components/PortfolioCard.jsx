import React from 'react';
import 'styles/PortfolioCard.scss';
class PortfolioCard extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {title,time,tags,cover,detials,url} =this.props;
        return (
            <section className="c-portfolio-card">
                <header className="portfolio-card-header">
                    {title}
                    <time className="portfolio-card-time">{time}</time>
                </header>
                <article className="portfolio-card-body" style={{backgroundImage:`url(${cover})`}}>
                    <div className="portfolio-card-article">
                        <p className="portfolio-card-detials">{detials}</p>
                        <div className="portfolio-card-view">VIEW</div>
                    </div>
                </article>
                <footer className="portfolio-card-footer">
                    {tags.map((value,index)=><span className="tags-item" key={{title}+'-tags:'+index}>{value}</span>)}
                </footer>
            </section>
        )
    }
}

export default PortfolioCard;
