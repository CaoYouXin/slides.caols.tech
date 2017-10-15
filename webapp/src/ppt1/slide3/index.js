import React, { Component } from 'react';
import './index.css';

class PPT1Slide3Component extends Component {
  componentDidUpdate(prevProps) {
    const { no: prevNo } = prevProps;
    const { no, over } = this.props;
    if (prevNo !== no && no > 0) {
      over();
    }
  }

  render() {
    return (<div className="ppt1-slide3-wrapper"></div>)
  }
}

export default PPT1Slide3Component;