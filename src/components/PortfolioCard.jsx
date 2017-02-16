import React from 'react';
import 'styles/PortfolioCard.scss';
class PortfolioCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.state={
            hover:false,
            mouse:[0,0]
        }
    }
    componentDidMount(){
        this.card.addEventListener('mousemove',this.handleMove,true)
    }

    componentWillUnmount() {
        this.card.removeEventListener('mousemove',this.handleMove)
    }
    render() {
        const {title,time,tags,cover,detials,url} =this.props;
        const {hover,mouse} =this.state;
        return (
            <section
                className="c-portfolio-card"
                style={hover?PortfolioCard.get3DStyle(mouse):null}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleLeave}
                ref={ref=>this.card=ref}
            >
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

    handleMove(e){
        console.log('原生',e.offsetY);
        let w=this.card.clientWidth,
            h=this.card.clientHeight,
            x=e.offsetX,
            y=e.offsetY,
            ratio=h/w,
            ry=(x/w)*60-30,
            rx=30*ratio-(y/h)*60*ratio;
        this.setState({
            mouse:[rx,ry]
        })
    }
    handleHover(){
        this.setState({
            hover:true
        })
    }
    handleLeave(){
        this.setState({
            hover:false
        })
    }
    static get3DStyle(rotate){

        return {
            transform:`rotateX(${rotate[0]}deg) rotateY(${rotate[1]}deg) `,
            MozTransform:`rotateX(${rotate[0]}deg) rotateY(${rotate[1]}deg) `,
            WebkitTransform:`rotateX(${rotate[0]}deg) rotateY(${rotate[1]}deg) `
        }
    }
}

export default PortfolioCard;
