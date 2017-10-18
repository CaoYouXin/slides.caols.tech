import React, { Component } from 'react';
import './SlideElem.css';

const transform2SlideElem = (WrrappedComponent, length) => {
  return class SlideElemComponent extends Component {
    componentDidUpdate(prevProps) {
      const { no: prevNo } = prevProps;
      const { no, over } = this.props;
      if (prevNo === no) {
        return;
      }

      if (no >= length) {
        over();
      }
    }

    render() {
      return (<WrrappedComponent {...this.props} />);
    }
  }
}

export { transform2SlideElem };