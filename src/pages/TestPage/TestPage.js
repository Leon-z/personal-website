import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import './TestPage.scss';
class Tabs extends Component {
    static propTypes= {
        className:PropTypes.string,
        classPrefix:PropTypes.string,
        children:PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        defaultActiveIndex:PropTypes.number,
        activeActiveIndex:PropTypes.number,
        onChange:PropTypes.func
    };

    static defaultProps={
        classPrefix:'tab',
        onChange:()=>{}
    };

    constructor(props){
        super(props);
        this.handleTabClick=this.handleTabClick.bind(this);
        const currProps=this.props;

        let activeIndex;
        //初始化 activeindex state
        if('activeIndex' in currProps){
            activeIndex=currProps.activeIndex;
        }else if('defaultActiveIndex' in currProps){
            activeIndex=currProps.defaultActiveIndex;
        }
        this.state={
            activeIndex,
            prevIndex:activeIndex
        }
    }
    render() {
        const { className } = this.props;
        // classnames 用于合并 class
        const classes = classnames(className, 'ui-tabs');

        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        );
    }
    handleTabClick(activeIndex) {
        const prevIndex = this.state.activeIndex;

        // 如果当前 activeIndex 与传入的 activeIndex 不一致，
        // 并且 props 中存在 defaultActiveIndex 时，则更新
        if (this.state.activeIndex !== activeIndex &&
            'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex,
            });

            // 更新后执行回调函数，抛出当前索引和上一次索引
            this.props.onChange({ activeIndex, prevIndex });
        }
    }
    renderTabNav() {
        const { classPrefix, children } = this.props;
        return (
            <TabNav
                key="tabBar"
                classPrefix={classPrefix}
                onTabClick={this.handleTabClick}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }
    renderTabContent() {
        const { classPrefix, children } = this.props;

        return (
            <TabContent
                key="tabcontent"
                classPrefix={classPrefix}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }
}
class TabNav extends Component {
    static propTypes = {
        classPrefix: React.PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number,
    };

    getTabs() {
        const { panels, classPrefix, activeIndex } = this.props;

        return React.Children.map(panels, (child) => {
            if (!child) { return; }

            const order = parseInt(child.props.order, 10);

            // 利用 class 控制显示和隐藏
            let classes = classnames({
                [`${classPrefix}-tab`]: true,
                [`${classPrefix}-active`]: activeIndex === order,
                [`${classPrefix}-disabled`]: child.props.disabled,
            });

            let events = {};
            if (!child.props.disabled) {
                events = {
                    onClick: this.props.onTabClick.bind(this, order),
                };
            }

            const ref = {};
            if (activeIndex === order) {
                ref.ref = 'activeTab';
            }

            return (
                <li
                    role="tab"
                    aria-disabled={child.props.disabled ? 'true' : 'false'}
                    aria-selected={activeIndex === order? 'true' : 'false'}
                    {...events}
                    className={classes}
                    key={order}
                    {...ref}
                >
                    {  child.props.tab}
                </li>
            );
        });
    }

    render() {
        const { classPrefix } = this.props;

        const rootClasses = classnames({
            [`${classPrefix}-bar`]: true,
        });

        const classes = classnames({
            [`${classPrefix}-nav`]: true,
        });

        return (
            <div className={rootClasses} role="tablist">
                <ul className={classes}>
                    {this.getTabs()}
                </ul>
            </div>
        );
    }
}
class TabContent extends Component {
    static propTypes = {
        classPrefix: React.PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number,
    };

    getTabPanes() {
        const { classPrefix, activeIndex, panels } = this.props;

        return React.Children.map(panels, (child) => {
            if (!child) { return; }

            const order = parseInt(child.props.order, 10);
            const isActive = activeIndex === order;
            return React.cloneElement(child, {
                classPrefix,
                isActive,
                children: child.props.children,
                key: `tabpane-${order}`,
            });
        });
    }

    render() {
        const { classPrefix } = this.props;

        const classes = classnames({
            [`${classPrefix}-content`]: true,
        });
        console.log(this.getTabPanes());
        return (
            <div className={classes}>
                {this.getTabPanes()}
            </div>
        );
    }
}
class TabPane extends Component {
    static propTypes = {
        tab: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
        ]).isRequired,
        order: PropTypes.string.isRequired,
        disable: PropTypes.bool,
        isActive: PropTypes.bool,
    };

    render() {
        const { classPrefix, className, isActive, children } = this.props;

        const classes = classnames({
            [className]: className,
            [`${classPrefix}-panel`]: true,
            [`${classPrefix}-active`]: isActive,
        });

        return (
            <div
                role="tabpanel"
                className={classes}
                aria-hidden={!isActive}
            >
                {children}
            </div>
        );
    }
}

const App = ({ props }) =>
    <Tabs classPrefix={'tabs'} defaultActiveIndex={0} className="tabs-bar">
        <TabPane
            order="1"
            tab={<span><i className="fa fa-home"></i>&nbsp;Home</span>}
        >
            <h2>asf</h2>
        </TabPane>
        <TabPane
            order="0"
            tab={<span><i className="fa fa-book"></i>&nbsp;Library</span>}>
            第二个 Tab 里的内容
        </TabPane>
        <TabPane
            order="4"
            tab={<span><i className="fa fa-pencil"></i>&nbsp;Applications</span>}>
            第三个 Tab 里的内容
        </TabPane>
    </Tabs>;
export default App;
