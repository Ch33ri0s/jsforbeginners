import React, { Component } from 'react';
import Navbar from './navbar';
import { Addbutton } from './addbutton';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>
        <Addbutton/>
      </div>
    );
  }
}
