import React from 'react';
import { NavLink} from 'react-router-dom';
import classnames from 'classnames';

import style from './Header.scss';

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

        const rootCls=classnames({
            'top':status==='top',
            'up':status==='up',
            'down':status==='down',
        });
        const logoCls=classnames({
            'top-logo':status==='top',
            'up-logo':status==='up',
            'logo':status==='down',
        });
        const navItemCls=classnames({
            'nav-item--top':status==='top',
            'nav-item--up':status==='up',
            'nav-item':status==='down',
        });
        return (
            <header className={style[rootCls]}>
                <NavLink to='/' exact className={style[logoCls]}>Leon</NavLink>
                <nav className={style.nav}>
                    <NavLink to='/' exact activeClassName={style.active} className={style[navItemCls]}>Home</NavLink>
                    <NavLink to='/archive' exact activeClassName={style.active} className={style[navItemCls]}>Archive</NavLink>
                    <NavLink to='/portfolio' activeClassName={style.active} className={style[navItemCls]}>Portfolio</NavLink>
                    <NavLink to='/about' activeClassName={style.active} className={style[navItemCls]}>About</NavLink>
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
}
export default Header;
