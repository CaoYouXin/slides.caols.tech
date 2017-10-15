import React, { Component } from 'react';
import './FixedPosElem.css';

const transform2FixedPosElem = (WrappedComponent, idxX, idxY) => {
  return class FixedPosElemComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { no: 0 };
    }

    next() {
      const { no } = this.state;
      this.setState({ no: no + 1 });
    }

    over() {
      this.setState({ no: 0 });

      const { over } = this.props;
      over(true);
    }

    before() {
      this.setState({ no: 0 });

      const { over } = this.props;
      over(false);
    }

    render() {
      const { no } = this.state;
      return (
        <div className="fixed-pos-elem-wrapper" style={{
          width: window.innerWidth + 'px',
          height: window.innerHeight + 'px',
          top: (idxY * window.innerHeight) + 'px',
          left: (idxX * window.innerWidth) + 'px'
        }}>
          <div className="before" onClick={(e) => this.before()}>上一个</div>
          <div className="next" onClick={(e) => this.next()}>下一个</div>
          <WrappedComponent {...this.props} no={no} over={() => this.over()} />
        </div>
      );
    }
  }
}

export { transform2FixedPosElem };