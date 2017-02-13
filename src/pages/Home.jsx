import React from 'react';
import Banner from '../components/Banner'
import 'styles/Home.scss';
class Home extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    render() {
        let mixHeight=window.screen.availHeight;//让页面最小高度等于电脑高度
        return (
           <div className="p-home" style={{minHeight:mixHeight}}>
               <Banner
                   imgURL={require('../images/banner_home.jpg')}
                   title="Leon"
                   detail="叮叮当当，敲敲键盘"
               />
           </div>
        )
    }
}
export default Home;
