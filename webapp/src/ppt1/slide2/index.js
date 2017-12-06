import React, { Component } from 'react';
import './index.css';
import TWEEN from '@tweenjs/tween';

class PPT1Slide2Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: "scaleX(0)",
      percentageText: "0%"
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
        this.setState({ percentage: "scaleX(0.6)" });
        let state1 = { x: 0 };
        let target1 = { x: 0.6 };
        let tween1 = new TWEEN.Tween(state1).to(target1, 1000);
        tween1.onUpdate(function () {
          self.setState({ percentageText: (state1.x * 100).toFixed(0) + '%' });
        });
        tween1.onComplete(function () {
          animationFinished();
        });
        tween1.easing(TWEEN.Easing.Linear.None);
        tween1.start();
        break;
      case 0:
        this.setState({ percentage: "scaleX(0)", percentageText: "0%" });
        let state2 = { x: 0.6 };
        let target2 = { x: 0 };
        let tween2 = new TWEEN.Tween(state2).to(target2, 1000);
        tween2.onUpdate(function () {
          self.setState({ percentageText: (state2.x * 100).toFixed(0) + '%' });
        });
        tween2.onComplete(function () {
          animationFinished();
        });
        tween2.easing(TWEEN.Easing.Linear.None);
        tween2.start();
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="ppt1-slide2-wrapper mid-box">
        <div className="progress-bar">
          <div className="background"></div>
          <div className="foreground" style={{
            transform: this.state.percentage
          }} ></div>
          <div className="text">{this.state.percentageText}</div>
        </div>
      </div>
    );
  }
}

export default PPT1Slide2Component;