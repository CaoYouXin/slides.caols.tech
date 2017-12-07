import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import {
  transform2HomeElem, transform2FixedScrollElem,
  transform2SlideElem, transform2ScaledElem
} from '../hoc';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';
import Slide4 from './slide4';
import { ThumbHeight } from '../comp';

const thumbWidth = window.innerWidth * ThumbHeight / window.innerHeight;
const slides = [
  { x: 0, y: 0, slide: transform2SlideElem(Slide1, 0, 0, 5), thumb: transform2ScaledElem(Slide1, thumbWidth, ThumbHeight) },
  { x: 0, y: 1, slide: transform2SlideElem(Slide2, 0, 1, 2), thumb: transform2ScaledElem(Slide2, thumbWidth, ThumbHeight) },
  { x: 1, y: 1, slide: transform2SlideElem(Slide3, 1, 1, 2), thumb: transform2ScaledElem(Slide3, thumbWidth, ThumbHeight) },
  { x: 1, y: 2, slide: transform2SlideElem(Slide4, 1, 2, 1), thumb: transform2ScaledElem(Slide4, thumbWidth, ThumbHeight) }
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

  list() {
    const { thumb } = this.props;
    thumb(slides, thumbWidth * slides.length, ThumbHeight);
  }

  goTo(no) {
    const { move } = this.props;
    const slide = slides[no];
    move(0 - slide.x * window.innerWidth, 0 - slide.y * window.innerHeight);
  }

  componentDidUpdate(prevProps) {
    const { thumbSelected: prevThumbSelected } = prevProps;
    const { thumbSelected } = this.props;
    if (-1 !== thumbSelected && prevThumbSelected !== thumbSelected) {
      this.goTo(thumbSelected);
    }
  }

  render() {
    return (
      <div className="ppt1-wrapper">
        {
          slides.map((slide, i) => (
            <slide.slide key={slide.x + ',' + slide.y} idx={i} over={(isNext) => this.over(isNext, i)} list={() => this.list()} />
          ))
        }
      </div>
    );
  }
}

export default transform2HomeElem(transform2FixedScrollElem(connect(
  (store) => ({
    thumbSelected: store.thumb.no
  }),
  (dispatch) => ({
    move: (offsetX, offsetY) => dispatch({
      type: "MOVE",
      data: {
        key: 'ppt1',
        offsetX,
        offsetY
      }
    }),
    thumb: (slides, width, height) => dispatch({
      type: "SHOW_THUMBS",
      slides,
      height,
      width
    })
  })
)(PPT1Component), 'ppt1', window.innerWidth, window.innerHeight));