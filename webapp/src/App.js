import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { transform2ScrollElem } from './hoc';
import { Thumbs } from './comp';
import PPT1 from './ppt1';
import PPT2 from './ppt2';
import PPT3 from './ppt3';

class App extends Component {
  bug() {
    localStorage.clear();
    window.location.href = '/';
  }

  render() {
    const { representing, wrapperWidth, wrapperHeight } = this.props;
    return (
      <div>
        <div className="App" style={{
          width: representing !== '' ? wrapperWidth : '100%',
          height: representing !== '' ? wrapperHeight : 'auto'
        }}>
          <div className="bug" onClick={(e) => this.bug()}>快速重置</div>
          <PPT1 name="2017年10月汇报" />
          <PPT2 name="2017年11月汇报" />
          <PPT3 name="2017年12月汇报" />
          <Thumbs />
        </div>
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
