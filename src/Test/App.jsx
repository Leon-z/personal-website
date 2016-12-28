import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  AppActions from './AppActions';

require('styles/App.scss')
const propTypes = {
    //id: PropTypes.number.isRequired,
    //text: PropTypes.string,
    counter: PropTypes.number.isRequired
};


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.counter}
                </div>
            </div>
        )
    }
}

App.propTypes = propTypes;


function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
