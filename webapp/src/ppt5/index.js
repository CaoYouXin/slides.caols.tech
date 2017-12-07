import React, { Component } from 'react';
import './index.css';
import { transform2HomeElem } from '../hoc';

class PPT5Component extends Component {
  render() {
    return (<div className="ppt5-wrapper"></div>);
  }
}

export default transform2HomeElem(PPT5Component);