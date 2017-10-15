import React, { Component } from 'react';
import './FixedScrollElem.css';
import { connect } from 'react-redux';

const transform2FixedScrollElem = (WrappedComponent, key, width, height) => {
  class FixedScrollElem extends Component {
    calcStyles() {
      let { data } = this.props;
      if (data.key === '') {
        return {
          "transform": 'translate3d(0, 0, 0)'
        };
      }

      if (data.key !== key) {
        return;
      }

      return {
        "transform": 'translate3d(' + data.offsetX + 'px, ' + data.offsetY + 'px, 0)'
      };
    }

    render() {
      return (
        <div className="fixed-scroll-elem-wrapper" style={{
          "width": width + 'px',
          "height": height + 'px'
        }}>
          <div className="fixed-scroll-elem-content" style={this.calcStyles()}>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  }
  return connect(
    (store) => ({
      data: store.data
    })
  )(FixedScrollElem);
}

export { transform2FixedScrollElem }; 