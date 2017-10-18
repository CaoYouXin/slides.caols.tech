import React, { Component } from 'react';
import './Thumbs.css';
import { connect } from 'react-redux';
import { transform2ScrollElem } from '../hoc';

class ThumbsComponent extends Component {
  render() {
    const { slides, thumbSelect } = this.props;
    return (
      <div className="thumbs-content">
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
    slides: store.thumb.slides
  }),
  (dispatch) => ({
    thumbSelect: (no) => dispatch({
      type: 'THUMB_SELECT',
      no
    })
  })
)(ThumbsComponent), window.innerWidth, height);

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