import React, { Component } from 'react';
import './Thumbs.css';
import { connect } from 'react-redux';

class ThumbsComponent extends Component {
  render() {
    const { height, slides, thumbSelect } = this.props;
    return (
      <div className="thumbs" style={{
        height: height + 'px'
      }}>
        <div className="thumbs-content">
          {
            slides.map((slide, i) => (
              <slide.thumb key={slide.x + ',' + slide.y} no={i} onClick={(no) => thumbSelect(no)} />
            ))
          }
        </div>
      </div>
    );
  }
}

const Thumbs = connect(
  (store) => ({
    height: store.thumb.height,
    slides: store.thumb.slides
  }),
  (dispatch) => ({
    thumbSelect: (no) => dispatch({
      type: 'THUMB_SELECT',
      no
    })
  })
)(ThumbsComponent);

export { Thumbs };