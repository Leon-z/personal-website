import React from 'react';
import Banner from '../components/Banner';
import AboutMeCard from '../components/AboutMeCard';
import BlogShortItem from '../components/BlogShortItem';
import {formatTime,formatURL} from '../utils/functions';
import 'styles/Home.scss';

import 'particles.js';
import data from '../source/mockData';//用脚本爬来hexo上博客的数据

class Home extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        particlesJS('particles-js', {
            'particles': {
                'number': {
                    'value': 70,
                    'density': {
                        'enable': true,
                        'value_area': 800
                    }
                },
                'color': {
                    'value': '#0085a1'
                },
                'shape': {
                    'type': 'star',
                    'stroke': {
                        'width': 0,
                        'color': '#0085a1'
                    },
                    'polygon': {
                        'nb_sides': 5
                    },
                    'image': {
                        'src': 'img/github.svg',
                        'width': 100,
                        'height': 100
                    }
                },
                'opacity': {
                    'value': 1,
                    'random': false,
                    'anim': {
                        'enable': false,
                        'speed': 1,
                        'opacity_min': 0.1,
                        'sync': false
                    }
                },
                'size': {
                    'value': 4,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 40,
                        'size_min': 0.1,
                        'sync': false
                    }
                },
                'line_linked': {
                    'enable': true,
                    'distance': 150,
                    'color': '#ffffff',
                    'opacity': 0.4,
                    'width': 1
                },
                'move': {
                    'enable': true,
                    'speed': 5,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'bounce': false,
                    'attract': {
                        'enable': false,
                        'rotateX': 600,
                        'rotateY': 1200
                    }
                }
            },
            'interactivity': {
                'detect_on': 'canvas',
                'events': {
                    'onhover': {
                        'enable': true,
                        'mode': 'grab'
                    },
                    'onclick': {
                        'enable': true,
                        'mode': 'push'
                    },
                    'resize': true
                },
                'modes': {
                    'grab': {
                        'distance': 140,
                        'line_linked': {
                            'opacity': 1
                        }
                    },
                    'bubble': {
                        'distance': 400,
                        'size': 40,
                        'duration': 2,
                        'opacity': 8,
                        'speed': 4
                    },
                    'repulse': {
                        'distance': 200,
                        'duration': 0.4
                    },
                    'push': {
                        'particles_nb': 4
                    },
                    'remove': {
                        'particles_nb': 2
                    }
                }
            },
            'retina_detect': true
        });
    }
    render() {
        let mixHeight = window.screen.availHeight;//让页面最小高度等于电脑高度
        return (
            <div className="p-home" style={{minHeight: mixHeight}}>
                <Banner
                    imgURL={require('../images/banner_home.png')}
                    title="Leon"
                    detail="没有比思考更复杂的享受了"
                >
                    <div id="particles-js"></div>
                </Banner>
                <div className="home-container clearfix">
                    <article className="home-article">
                        {/* 首页博客列表 */}
                        {data.sort((a,b)=>new Date(a.date)<new Date(b.date)).map((value,index)=>{
                            let time=formatTime(value.date);
                            return <BlogShortItem
                                index={index}
                                key={time}
                                title={value.title}
                                introduction={value.value}
                                time={time}
                                url={formatURL(value.fileName,value.date)}
                            />
                        })}
                    </article>
                    <aside className="home-aside">
                        <AboutMeCard/>
                    </aside>
                </div>
            </div>
        )
    }
}
export default Home;
