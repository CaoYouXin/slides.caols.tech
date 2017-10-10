import React, { Component } from 'react';
import './HomeElem.css';

const transform2HomeElem = (WrappedComponent) => {
  return class HomeElemComponent extends Component {
    render() {
      const { name } = this.props;
      return (
        <div className="home-elem-wrapper">
          <div className="home-elem-content">
            <WrappedComponent />
          </div>
          <h3>{name}</h3>
        </div>
      )
    }
  }
}

export { transform2HomeElem };