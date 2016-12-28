import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  AppActions from './AppActions';

require('styles/App.scss');

const Btn = React.createClass({
    render() {
        return (
            <div>
                <div className="add" onClick={this.props.increment}/>
                <div className="de" onClick={this.props.decrement}></div>
            </div>
        )
    }
});
function mapStateToProps() {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Btn);
