import React, { Component } from 'react';
import './HomeElem.css';

const transform2HomeElem = (WrappedComponent) => {
  return class HomeElemComponent extends Component {
    render() {
      return (
        <div className="home-elem-wrapper">
          <WrappedComponent />
        </div>
      )
    }
  }
}

export { transform2HomeElem };