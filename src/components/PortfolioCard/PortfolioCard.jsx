import React from 'react';
import './PortfolioCard.scss';
class PortfolioCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.state={
            hover:false,
            animating:false,
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
        const {hover,mouse,animating} =this.state;
        return (
            <section
                className={animating?"c-portfolio-card animating":"c-portfolio-card"}
                style={hover?PortfolioCard.get3DStyle(mouse):null}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleLeave}
                ref={ref=>this.card=ref}
                data-role="portfolio-card"
            >
                <header className="portfolio-card-header">
                    {title}
                    <time className="portfolio-card-time">{time}</time>
                </header>
                <article className="portfolio-card-body" style={{backgroundImage:`url(${cover})`}}>
                    <div className="portfolio-card-article">
                        <p className="portfolio-card-detials">{detials}</p>
                        <div className="portfolio-card-view" ref={ref=>this.viewBtn=ref} onClick={this.handleViewClick}>VIEW</div>
                    </div>
                </article>
                <footer className="portfolio-card-footer">
                    {tags.map((value,index)=><span className="tags-item" key={{title}+'-tags:'+index}>{value}</span>)}
                </footer>
            </section>
        )
    }
    //计算鼠标当前位置 占整个card的百分比来决定翻转程度
    handleMove(e){
        if(e.target===this.viewBtn){
            return
        }
        let w=this.card.clientWidth,
            h=this.card.clientHeight,
            x=e.offsetX,
            y=e.offsetY,
            ratio=h/w,
            ry=(x/w)*36*ratio-18*ratio,
            rx=18*ratio-(y/h)*36*ratio;
        this.setState({
            mouse:[rx,ry]
        })
    }
    handleHover(){
        this.setState({
            hover:true
        },()=>{
            setTimeout(()=>{
                this.setState({
                    animating:true
                 })
            },400)
        })
    }
    handleLeave(){
        this.setState({
            hover:false,
            animating:false
        })
    }
    //鼠标点击view的操作
    handleViewClick(){

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
