import React, { Component } from 'react';
import './index.css';
import TWEEN from '@tweenjs/tween.js';

class PPT1Slide1Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World.',
      opacity: 1
    };
  }

  componentDidUpdate(prevProps) {
    const { no: prevNo } = prevProps;
    const { no, over } = this.props;
    if (prevNo !== no) {
      if (no > 2) {
        over();
        return;
      }

      const self = this;
      switch (no) {
        case 1:
          var state1 = { x: 0 };
          var target1 = { x: 1 };
          var flipped1 = false;
          var tween1 = new TWEEN.Tween(state1).to(target1, 2000);
          tween1.onUpdate(function () {
            if (!flipped1 && state1.x > 0.5) {
              self.setState({ text: '大家好!' });
              flipped1 = true;
            }
            self.setState({ opacity: Math.abs(state1.x * 2 - 1) });
          });
          tween1.easing(TWEEN.Easing.Linear.None);
          tween1.start();
          break;
        case 2:
          var state2 = { x: 0 };
          var target2 = { x: 1 };
          var flipped2 = false;
          var tween2 = new TWEEN.Tween(state2).to(target2, 2000);
          tween2.onUpdate(function () {
            if (!flipped2 && state2.x > 0.5) {
              self.setState({ text: "我来演示一些东西." });
              flipped2 = true;
            }
            self.setState({ opacity: Math.abs(state2.x * 2 - 1) });
          });
          tween2.easing(TWEEN.Easing.Linear.None);
          tween2.start();
          break;
        case 0:
        default:
          this.setState({ text: 'Hello World.' });
      }
    }
  }

  render() {
    return (<div className="ppt1-slide1-wrapper mid-box"><span style={{ opacity: this.state.opacity }}>{this.state.text}</span></div>);
  }
}

export default PPT1Slide1Component;