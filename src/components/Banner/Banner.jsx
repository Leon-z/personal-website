import React from 'react';
import style from './Banner.scss';

//七牛的图片样式处理，高度压缩图片，先提供一个体积较小的图片，等大图下载好后替换
const compressionParams = '?imageView2/0/interlace/1/q/5|imageslim';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.state = {
            imgLoaded: false,
        }
    }

    componentDidMount() {
        const {imgURL} = this.props;

        this.isImgLoaded(imgURL);
    }

    render() {
        const {title, detail, imgURL, disCompression} = this.props;
        const {imgLoaded} = this.state;
        const url = !disCompression && !imgLoaded ? `url(${imgURL + compressionParams})` : `url(${imgURL})`;

        const rootStyle = {
            backgroundImage: url,
            filter: !disCompression && !imgLoaded ? `blur(3px)` : `blur(0)`
        };
        return (
            <div className={style.root} >

                <div className={style.content}>
                    <h1 className={style.title}>{title}</h1>
                    <p className={style.detail}>{detail}</p>
                </div>
                {this.props.children}
                <div className={style.bg} style={rootStyle}/>
            </div>
        )
    }

    isImgLoaded = (url) => {


        const img = new Image();
        img.src = url;

        //TODO:ie下complete会由于节点未加载一直报false，未来如果考虑兼容IE要处理一下
        if (img.complete) {
            this.setState({
                imgLoaded : true
            })
        } else {
            img.onload = ()=>{
                this.setState({
                    imgLoaded : true
                })
            }
        }
    }
}
Banner.defaultProps = {
    disCompression: false,
};
export default Banner;
