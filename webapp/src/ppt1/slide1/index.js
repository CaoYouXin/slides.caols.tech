import React, { Component } from 'react';
import './index.css';

class PPT1Slide1Component extends Component {
  componentDidUpdate(prevProps) {
    const { no: prevNo } = prevProps;
    const { no, over } = this.props;
    if (prevNo !== no && no > 0) {
      over();
    }
  }

  render() {
    return (<div className="ppt1-slide1-wrapper">Hello World 1</div>)
  }
}

export default PPT1Slide1Component;