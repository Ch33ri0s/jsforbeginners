import React, { Component } from 'react';
import Navbar from './navbar';
import Infoblock from './infoblock';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>
        <Infoblock/>
      </div>
    );
  }
}
