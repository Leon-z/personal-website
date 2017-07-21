import React, {Component, PropTypes} from 'react';
import './ImgPreview.scss';
class ImgPreview extends Component {
    static PropTypes = {
        small: PropTypes.string,
        large: PropTypes.string,
        alt: PropTypes.string,
        style: PropTypes.object,
    };
    static defaultProps={
        width:400,
        height:400,
    };
    constructor(props) {
        super(props);

        this.handleLoad=this.handleLoad.bind(this);
        this.state = {
            loaded: false
        }
    }
    handleLoad(){
        this.setState({
            loaded:true
        })
    }
    render() {
        const {loaded}= this.state;
        const {small, large,style,alt} =this.props;
        return (
            <div className="img-preview">
                    <img
                        src={loaded?large:small}
                        style={style}
                        alt={alt}
                        className={loaded?"img-preview--original":"img-preview--small"}
                    />
                    <img src={large} style={{display:'none'}} className="" onLoad={this.handleLoad}/>
            </div>
        )
    }
}
export default ImgPreview;
