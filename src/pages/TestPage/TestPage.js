import React, {Component, PropTypes, cloneElement} from 'react';
import {Motion, spring} from 'react-motion';
import {Seq} from 'immutable';
import EventEmitter from 'events';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import styles from './TestPage.scss';


class Tab extends Component {

}

@immutableRenderDecorator
@CSSModules(styles, {allowMultiple:true})
class TabPane extends Component {
    static PropTypes = {
        tab:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        order:PropTypes.string.isRequired,
        disable:PropTypes.bool,
        isActive:PropTypes.bool,
    };
    render(){
        const {isActive,children} =this.props;

        const classes=classnames({
            panel:true,
            contentActive:isActive,
        });

        return (
            <div
                role="tabpanel"
                styleName={classes}
                aria-hidden={isActive}
            >
                {children}
            </div>
        )

    }
}


export default Tab;
