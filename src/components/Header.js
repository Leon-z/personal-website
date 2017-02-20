import React from 'react';
import {Link, IndexLink} from 'react-router';
import 'styles/Header.scss';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            scrollTop:0,//页面滚动位置
            status: 'top'//top,up,down三种状态
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
                <Link to='/' className="header-logo">Leon</Link>
                <nav className="header-nav">
                    <IndexLink to='/' activeClassName='active' className="nav-item">Home</IndexLink>
                    <a
                        href="javascript:"
                        className="nav-item"
                        onClick={this.handleClick}
                    >Blog</a>
                    <Link to='portfolio' activeClassName='active' className="nav-item">Portfolio</Link>
                    <Link to='about' activeClassName='active' className="nav-item">About</Link>
                </nav>

            </header>
        )
    }
    //监听滚动，读取滚动位置，
    // 比之前位置低说明在向下滚动，导航隐藏 并且状态为down
    // 比之前位置高说明在向上滚动，导航显示 并且状态为up
    // 位置为0说明导航在顶部，  状态为top
    handleScroll(){
        let newScrollTop=(document.body.scrollTop||document.documentElement.scrollTop);
        let oldScrollTop=this.state.scrollTop;
        if(newScrollTop<=10){
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

    //目前 react 做博客系统 还需要后台。node在学，先用hexo顶上
    handleClick(){
        window.location='http://leon-z.me/blog';
    }
}
export default Header;
