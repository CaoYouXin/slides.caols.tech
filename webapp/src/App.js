import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { group } from './util';
import { transform2ScrollElem } from './hoc';
import PPT1 from './ppt1';

class App extends Component {
  render() {
    const { representing } = this.props;
    return (
      <div className={group({
        "screen": representing
      }, ["App"])}>
        <PPT1 name="2017年10月汇报" />
      </div>
    );
  }
}

export default connect(
  (store) => ({
    representing: store.representing
  })
)(transform2ScrollElem(App, window.innerWidth, window.innerHeight));
