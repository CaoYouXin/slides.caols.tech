import React, { Component } from 'react';
import './index.css';
import TWEEN from '@tweenjs/tween';
import { group } from '../../util/css';

class PPT1Slide1Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      opacity: 1,
      effect: false
    };
  }

  componentDidUpdate(prevProps) {
    const { no: prevNo } = prevProps;
    const { no, animationFinished } = this.props;
    if (prevNo === no) {
      return;
    }

    const self = this;
    switch (no) {
      case 1:
        this.setState({ text: 'Hello World.', effect: true });
        animationFinished();
        break;
      case 2:
        this.setState({ text: '', effect: false });
        animationFinished();
        break;
      case 3:
        let state1 = { x: 0 };
        let target1 = { x: 1 };
        let flipped1 = false;
        let tween1 = new TWEEN.Tween(state1).to(target1, 2000);
        tween1.onUpdate(function () {
          if (!flipped1 && state1.x > 0.5) {
            self.setState({ text: '大家好!' });
            flipped1 = true;
          }
          self.setState({ opacity: Math.abs(state1.x * 2 - 1) });
        });
        tween1.onComplete(function () {
          animationFinished();
        });
        tween1.easing(TWEEN.Easing.Linear.None);
        tween1.start();
        break;
      case 4:
        let state2 = { x: 0 };
        let target2 = { x: 1 };
        let flipped2 = false;
        let tween2 = new TWEEN.Tween(state2).to(target2, 2000);
        tween2.onUpdate(function () {
          if (!flipped2 && state2.x > 0.5) {
            self.setState({ text: "我来演示一些东西." });
            flipped2 = true;
          }
          self.setState({ opacity: Math.abs(state2.x * 2 - 1) });
        });
        tween2.onComplete(function () {
          animationFinished();
        });
        tween2.easing(TWEEN.Easing.Linear.None);
        tween2.start();
        break;
      case 0:
        this.setState({ text: '', effect: false });
        animationFinished();
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="ppt1-slide1-wrapper mid-box">
        <span className={group({
          "effect": this.state.effect
        })} style={{
          opacity: this.state.opacity
        }}>{this.state.text}</span>
      </div>
    );
  }
}

export default PPT1Slide1Component;