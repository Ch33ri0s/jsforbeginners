import React, { Component } from 'react';

export default class Hamburger extends Component {
    constructor() {
        super()

        this.state = {
            isClicked: false
        }
    }

    onHandleClick = () => {
        this.setState({
            isClicked: 
        });

    }

    render() {
        return (
            <div className="hamburger-grid" onClick={this.onHandleClick}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        );
    }
}