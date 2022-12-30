import React, { Component } from 'react';
import Calculator from './Calculator';

export default class App extends Component {
  render() {
    return (
      <div className="h-screen flex justify-center items-center bg-slate-100">
        <Calculator />
      </div>
    );
  }
}
