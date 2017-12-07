import React, { Component } from 'react';
import './index.css';
import { transform2HomeElem } from '../hoc';

class PPT6Component extends Component {
  render() {
    return (<div className="ppt6-wrapper"></div>);
  }
}

export default transform2HomeElem(PPT6Component);