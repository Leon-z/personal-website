import React from 'react';
import './Loading.css';
const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__spinner">
                <div className="loading__spinner__container  loading__spinner__container1">
                    <div className="loading__circle1"/>
                    <div className="loading__circle2"/>
                    <div className="loading__circle3"/>
                    <div className="loading__circle4"/>
                </div>
                <div className="loading__spinner__container  loading__spinner__container2">
                    <div className="loading__circle1"/>
                    <div className="loading__circle2"/>
                    <div className="loading__circle3"/>
                    <div className="loading__circle4"/>
                </div>
                <div className="loading__spinner__container  loading__spinner__container3">
                    <div className="loading__circle1"/>
                    <div className="loading__circle2"/>
                    <div className="loading__circle3"/>
                    <div className="loading__circle4"/>
                </div>
            </div>
        </div>
    )
}
export default Loading;
