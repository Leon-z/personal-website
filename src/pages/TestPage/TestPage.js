import React, { Component, PropTypes } from 'react';

class Tabs extends Component {
    constructor(props) {
        super(props);

        const currProps = this.props;

        let activeIndex = 0;

        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex,
        };
    }
    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {},
    };
    // ...

    render() {
        return <div className="ui-tabs"></div>;
    }
};

export defaults Tabs;
