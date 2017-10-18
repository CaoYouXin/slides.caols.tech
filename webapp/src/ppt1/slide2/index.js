import React, { Component } from 'react';
import './index.css';
import { transform2SlideElem } from '../../hoc';

class PPT1Slide2Component extends Component {
  render() {
    return (<div className="ppt1-slide2-wrapper"></div>)
  }
}

export default transform2SlideElem(PPT1Slide2Component, 1);