import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { group } from './util';
import { transform2ScrollElem } from './hoc';

class App extends Component {
  render() {
    return (
      <div className={group({
        "screen": false
      }, ["App"])}>

      </div>
    );
  }
}

export default connect(

)(transform2ScrollElem(App, window.innerWidth, window.innerHeight));
