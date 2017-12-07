import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { transform2ScrollElem } from './hoc';
import { Thumbs } from './comp';
import PPT1 from './ppt1';
import PPT2 from './ppt2';
import PPT3 from './ppt3';
import PPT4 from './ppt4';
import PPT5 from './ppt5';
import PPT6 from './ppt6';

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
          <PPT1 name="⏎" />
          <PPT2 name="☯ 金" />
          <PPT3 name="☯ 🔥" />
          <PPT4 name="☯ 🐰" />
          <PPT5 name="☯ 👀" />
          <PPT6 name="☯ 水" />
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
