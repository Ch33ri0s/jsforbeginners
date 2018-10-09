import React, { Component } from 'react';
import Hamburger from './hamburger';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <ul>
                    <li><Hamburger/></li>
                    <li>Tenyson Partridge</li>
                    <li>Test</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;