import React, { Component } from 'react';
import './index.css';
import { transform2HomeElem } from '../hoc';

class PPT2Component extends Component {
  render() {
    return (<div class="ppt2-wrapper"></div>);
  }
}

export default transform2HomeElem(PPT2Component);