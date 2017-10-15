import React, { Component } from 'react';
import './index.css';
import { transform2HomeElem } from '../hoc';

class PPT3Component extends Component {
  render() {
    return (<div class="ppt3-wrapper"></div>);
  }
}

export default transform2HomeElem(PPT3Component);