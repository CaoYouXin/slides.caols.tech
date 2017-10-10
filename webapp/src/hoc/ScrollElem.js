import React, { Component } from 'react';
import './ScrollElem.css'

const transform2ScrollElem = (WrappedComponent, width, height) => {
  return class HomeElemComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        offsetX: 0,
        offsetY: 0
      };
    }

    calcStyles() {
      const { offsetX, offsetY } = this.state;
      return {
        "transform": 'translate3d(' + offsetX + 'px, ' + offsetY + 'px, 0)'
      };
    }

    onMouseWheel(e) {
      const { offsetX, offsetY } = this.state;
      this.setState({
        offsetX: Math.max(Math.min(0, width - this.content.offsetWidth), Math.min(0, offsetX - e.deltaX)),
        offsetY: Math.max(Math.min(0, height - this.content.offsetHeight), Math.min(0, offsetY - e.deltaY))
      });
      // console.log(this.state, width, height, this.content.offsetWidth, this.content.offsetHeight);
    }

    render() {
      return (
        <div className="scroll-elem-wrapper" style={{
          "width": width + 'px',
          "height": height + 'px'
        }} onWheel={(e) => this.onMouseWheel(e)}>
          <div className="scroll-elem-content" style={this.calcStyles()}
            ref={(content) => { this.content = content; }}>
            <WrappedComponent />
          </div>
        </div>
      )
    }
  }
}

export { transform2ScrollElem };