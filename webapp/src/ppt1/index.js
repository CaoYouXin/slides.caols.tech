import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { transform2HomeElem, transform2FixedScrollElem, transform2FixedPosElem } from '../hoc';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';

const slides = [
  { x: 0, y: 0, slide: transform2FixedPosElem(Slide1, 0, 0) },
  { x: 0, y: 1, slide: transform2FixedPosElem(Slide2, 0, 1) },
  { x: 1, y: 1, slide: transform2FixedPosElem(Slide3, 1, 1) }
];

class PPT1Component extends Component {
  over(isNext, i) {
    if (isNext && i === slides.length - 1) {
      alert('已到最后一张');
      return;
    }

    if (!isNext && i === 0) {
      alert('已到第一张');
      return;
    }

    const { move } = this.props;
    const slide = slides[i + (isNext ? 1 : -1)];
    move(0 - slide.x * window.innerWidth, 0 - slide.y * window.innerHeight);
  }

  render() {
    return (
      <div className="ppt1-wrapper">
        {slides.map((slide, i) => (
          <slide.slide key={slide.x + ',' + slide.y} over={(isNext) => this.over(isNext, i)} />
        ))}
      </div>
    );
  }
}

export default transform2HomeElem(transform2FixedScrollElem(connect(
  null,
  (dispatch) => ({
    move: (offsetX, offsetY) => dispatch({
      type: "MOVE",
      data: {
        key: 'ppt1',
        offsetX,
        offsetY
      }
    })
  })
)(PPT1Component), 'ppt1', window.innerWidth, window.innerHeight));