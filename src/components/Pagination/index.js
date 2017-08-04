/**
 * Created by linzhou on 2017/8/4.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './index.scss';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {current, pageSize, total, onPreClick, onNextClick} = this.props;
        const preCanClick = current > 1,
            nextCanClick = pageSize * current <= total,
            prevCls = classnames({
                "pre": preCanClick,
                "pre-disable": !preCanClick
            }),
            nextCls = classnames({
                "next": nextCanClick,
                "next-disable": !nextCanClick,
            });

        return (
            <span className={style.root}>
                <span className={style[prevCls]} onClick={preCanClick && onPreClick}>&lt;</span>
                <span className={style.current}> {current} / {Math.ceil(total / pageSize)} </span>
                <span className={style[nextCls]} onClick={nextCanClick && onNextClick}>&gt;</span>
            </span>
        )
    }
}
Pagination.defaultProps = {
    current: 1,
    pageSize: 10,
    total: Number.MAX_VALUE,
    onPreClick: () => {
    },
    onNextClick: () => {
    },
};
Pagination.propTypes = {
    current: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onPreClick: PropTypes.func,
    onNextClick: PropTypes.func,
};
