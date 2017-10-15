import React, { Component } from 'react';
import './ScaledElem.css';

const transform2ScaledElem = (WrappedComponent, width, height) => {
  return class ScaledElemComponent extends Component {
    render() {
      return (
        <div className="scaled-elem-wrapper" style={{
          width: width + 'px',
          height: height + 'px',
          left: (width * this.props.no) + 'px'
        }} onClick={() => this.props.onClick(this.props.no)}>
          <div className="scaled-elem-content" style={{
            width: window.innerWidth + 'px',
            height: window.innerHeight + 'px',
            transform: 'scale3d(' + (width / window.innerWidth) + ', ' + (height / window.innerHeight) + ', 1)'
          }}>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  }
}

export { transform2ScaledElem };