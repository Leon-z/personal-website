/**
 * Created by linzhou on 2017/8/1.
 */
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './index.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

            return (
                <div className="g-app">
                    <Header />
                    {this.props.children}
                    {/*<Footer/>*/}
                </div>
            )
    }
}

export const LayoutComponent = App;
export function mapStateToProps(state) {
    return {
        ...state
    }
}
