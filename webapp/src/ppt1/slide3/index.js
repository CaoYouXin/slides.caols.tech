import React, { Component } from 'react';
import './index.css';
import TWEEN from '@tweenjs/tween';
import { random } from '../../util/index';

class PPT1Slide3Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 0
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
        let source1 = { state: 0 };
        let target1 = { state: 1 };
        let tween1 = new TWEEN.Tween(source1).to(target1, 1000);
        tween1.onUpdate(function () {
          self.setState({ state: source1.state });
        });
        tween1.onComplete(function () {
          self.setState({ state: target1.state });
          animationFinished();
        });
        tween1.easing(TWEEN.Easing.Linear.None);
        tween1.start();
        break;
      case 0:
        let source2 = { state: 1 };
        let target2 = { state: 0 };
        let tween2 = new TWEEN.Tween(source2).to(target2, 1000);
        tween2.onUpdate(function () {
          self.setState({ state: source2.state });
        });
        tween2.onComplete(function () {
          self.setState({ state: target2.state });
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
    var data = [[0, 0.3, "#ff2"], [0.3, 0.4, "#f2f"], [0.4, 1, "#2ff"]];
    let state = this.state.state;
    data = data.map(datum => {
      if (state >= datum[1]) {
        return datum;
      } else if (state > datum[0]) {
        return [datum[0], state, datum[2]];
      } else {
        return null;
      }
    }).filter(datum => null != datum);

    return (
      <div className="ppt1-slide3-wrapper mid-box">
        <svg className="svg-wrapper" style={{
          width: window.innerWidth + 'px',
          height: window.innerHeight + 'px'
        }} viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
          <filter id="dropshadow" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
            <feOffset dx="0" dy="0" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <g transform={`translate(${window.innerWidth / 2}, ${window.innerHeight / 2})`} style={{ "filter": "url(#dropshadow)" }}>
            {
              data.map(datum => (<path key={datum[2]}
                // style={{ "filter": "url(#dropshadow)" }}
                fill={datum[2]}
                d={`M 0,0 L ${window.innerHeight / 3 * Math.sin(datum[0] * 2 * Math.PI)} ${0 - window.innerHeight / 3 * Math.cos(datum[0] * 2 * Math.PI)} A ${window.innerHeight / 3},${window.innerHeight / 3} 0 ${(datum[1] - datum[0]) > 0.5 ? 1 : 0},1 ${window.innerHeight / 3 * Math.sin(datum[1] * 2 * Math.PI)} ${0 - window.innerHeight / 3 * Math.cos(datum[1] * 2 * Math.PI)}`}></path>))
            }
          </g>
        </svg>
      </div>
    )
  }
}

export default PPT1Slide3Component;