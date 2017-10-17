import React, { Component } from 'react';
import './FixedPosElem.css';
import { connect } from 'react-redux';

const transform2FixedPosElem = (WrappedComponent, idxX, idxY) => {
  class FixedPosElemComponent extends Component {
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

    componentDidUpdate(prevProps) {
      const { thumbSelected: prevThumbSelected } = prevProps;
      const { thumbSelected, idx } = this.props;
      if (-1 !== thumbSelected && prevThumbSelected !== thumbSelected && thumbSelected !== idx) {
        this.setState({ no: 0 });
      }
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
          <div className="list" onClick={this.props.list}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="next" onClick={(e) => this.next()}>下一个</div>
          <WrappedComponent {...this.props} no={no} over={() => this.over()} />
        </div>
      );
    }
  }

  return connect(
    (store) => ({
      thumbSelected: store.thumb.no
    })
  )(FixedPosElemComponent);
}

export { transform2FixedPosElem };