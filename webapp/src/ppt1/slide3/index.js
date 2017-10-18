import React, { Component } from 'react';
import './index.css';
import { transform2SlideElem } from '../../hoc';

class PPT1Slide3Component extends Component {
  render() {
    return (<div className="ppt1-slide3-wrapper"></div>)
  }
}

export default transform2SlideElem(PPT1Slide3Component, 1);