import React, { Component } from 'react';

class Infoblock extends Component {
    render() {
        return (
            <div className="infoblock-container">
                <div className="infoblock-header">
                    <h1>first information block</h1>
                </div>
                <div className="infoblock-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, obcaecati!</p>
                </div>
                <div className="infoblock-footer">
                    <p>footer... or closing</p>
                </div>
            </div>
        );
    }
}

export default Infoblock;