import React from 'react';
import Header from '../components/Header';
import 'normalize.css/normalize.css';
import 'styles/Main.scss';

const Main = React.createClass({
    render: function() {
        return (
            <div className="g-main">
                <Header/>
            </div>
        );
    }
});
export default Main;
