import React from 'react';
import {Link, IndexLink} from 'react-router';
import 'styles/Header.scss';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            scrollTop:0,//页面滚动位置
            status: 'up'//top,up,down三种状态
        }
    }
    componentDidMount() {
        //加载完毕后页面绑定滚动事件
        document.addEventListener('scroll', this.handleScroll);
    }
    render() {
        const {status} =this.state;
        let headerStyle = 'c-header clearfix';
        //根据不同状态给顶部加上不同类名
        switch (status) {
            case 'top':headerStyle+=' top';
                break;
            case 'up':headerStyle+=' up';
                break;
            case 'down':headerStyle+=' down';
                break;
            default :break;
        }
        return (
            <header className={headerStyle}>
                <div className="header-logo">Leon</div>
                <nav className="header-nav">
                    <IndexLink to='/' activeClassName='active' className="nav-item">Home</IndexLink>
                    <a href="javascript:;" className="nav-item">Blog</a>
                    <Link to='portfolio' activeClassName='active' className="nav-item">Portfolio</Link>
                    <Link to='about' activeClassName='active' className="nav-item">About</Link>
                </nav>

            </header>
        )
    }

    handleScroll(){
        let newScrollTop=(document.body.scrollTop||document.documentElement.scrollTop);
        let oldScrollTop=this.state.scrollTop;
        if(newScrollTop===0){
            this.setState({
                status:'top'
             });
        }else if(newScrollTop<oldScrollTop){
            this.setState({
                scrollTop:newScrollTop,
                status:'up'
             })
        }else if(newScrollTop>oldScrollTop){
            this.setState({
                scrollTop:newScrollTop,
                status:'down'
            })
        }
    }
}
export default Header;
