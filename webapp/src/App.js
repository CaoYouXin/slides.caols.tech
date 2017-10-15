import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { transform2ScrollElem } from './hoc';
import PPT1 from './ppt1';
import PPT2 from './ppt2';

class App extends Component {
  render() {
    const { representing, wrapperWidth, wrapperHeight } = this.props;
    return (
      <div className="App" style={{
        width: representing !== '' ? wrapperWidth : '100%',
        height: representing !== '' ? wrapperHeight : 'auto'
      }}>
        <PPT1 name="2017年10月汇报" />
        <PPT2 name="2017年11月汇报" />
      </div>
    );
  }
}

export default connect(
  (store) => ({
    wrapperWidth: store.home_view.width,
    wrapperHeight: store.home_view.height,
    representing: store.representing
  })
)(transform2ScrollElem(App, window.innerWidth, window.innerHeight));
