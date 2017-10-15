import React, { Component } from 'react';
import './HomeElem.css';
import { connect } from 'react-redux';

const transform2HomeElem = (WrappedComponent) => {
  class HomeElemComponent extends Component {
    change(e) {
      e.preventDefault();
      e.stopPropagation();

      const { name, representing, represent, unrepresent } = this.props;
      if ('' === representing) {
        if (name === representing) {
          return;
        }

        represent(name);
      } else {

        unrepresent();
      }
    }

    render() {
      const { name, wrapperWidth, wrapperHeight, representing } = this.props;
      const padding = name === representing ? 0 : 20;
      const width = ('' === representing || name === representing) ? wrapperWidth : 0;
      const height = ('' === representing || name === representing) ? wrapperHeight : 0;
      return (
        <div className="home-elem-wrapper" style={{
          width: width + 'px',
          height: height + 'px'
        }}>
          <div className="home-elem-content" style={{
            width: 'calc(100% - ' + (2 * padding) + 'px)',
            height: 'calc(100% - 50px - ' + (2 * padding) + 'px)',
            margin: padding + 'px ' + padding + 'px 0 ' + padding + 'px'
          }}>
            <div style={{
              width: window.innerWidth + 'px',
              height: window.innerHeight + 'px',
              transform: "scale3d(" + ((width - padding * 2) / window.innerWidth) + ", " + ((height - 2 * padding - 50) / window.innerHeight) + ", 1)"
            }}>
              <WrappedComponent {...this.props} />
            </div>
          </div>
          <h3 onClick={(e) => this.change(e)}>{name}</h3>
        </div>
      )
    }
  }
  return connect(
    (store) => ({
      wrapperWidth: store.home_view.width,
      wrapperHeight: store.home_view.height,
      representing: store.representing
    }),
    (dispatch) => ({
      represent: (name) => dispatch({
        type: 'REPRESENTING',
        name
      }),
      unrepresent: () => dispatch({
        type: 'NOREPRESENTING'
      })
    })
  )(HomeElemComponent);
}

export { transform2HomeElem };