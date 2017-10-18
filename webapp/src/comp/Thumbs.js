import React, { Component } from 'react';
import './Thumbs.css';
import { connect } from 'react-redux';
import { transform2ScrollElem } from '../hoc';

class ThumbsComponent extends Component {
  render() {
    const { width, height, slides, thumbSelect } = this.props;
    return (
      <div className="thumbs-content" style={{
        width: width + 'px',
        height: height + 'px'
      }}>
        {
          slides.map((slide, i) => (
            <slide.thumb key={slide.x + ',' + slide.y} no={i} onClick={(no) => thumbSelect(no)} />
          ))
        }
      </div>
    );
  }
}

const height = 256;
const Thumbs = transform2ScrollElem(connect(
  (store) => ({
    width: store.thumb.width,
    height: store.thumb.height,
    slides: store.thumb.slides
  }),
  (dispatch) => ({
    thumbSelect: (no) => dispatch({
      type: 'THUMB_SELECT',
      no
    })
  })
)(ThumbsComponent), window.innerWidth, height, true);

class ThumbWrapperComponent extends Component {
  render() {
    return (
      <div className="thumbs" style={{
        height: this.props.height + 'px'
      }}>
        <Thumbs />
      </div>
    );
  }
}

const Thumb = connect(
  (store) => ({
    height: store.thumb.height
  })
)(ThumbWrapperComponent);

export { Thumb as Thumbs, height as ThumbHeight };