import React, { Component } from 'react';
import './index.css';
import { transform2HomeElem } from '../hoc';

class PPT1Component extends Component {
  render() {
    return (<div></div>);
  }
}

export default transform2HomeElem(PPT1Component);