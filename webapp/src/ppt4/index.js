import React, { Component } from 'react';
import './index.css';
import { transform2HomeElem } from '../hoc';

class PPT4Component extends Component {
  render() {
    return (<div className="ppt4-wrapper"></div>);
  }
}

export default transform2HomeElem(PPT4Component);