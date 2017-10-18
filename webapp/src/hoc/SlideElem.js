import React, { Component } from 'react';
import './SlideElem.css';
import { connect } from 'react-redux';

const transform2SlideElem = (WrappedComponent, idxX, idxY, length) => {
  class FixedPosElemComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { no: 0 };
      this.animationFinishedFlag = true;
    }

    componentDidUpdate(prevProps) {
      const { thumbSelected: prevThumbSelected } = prevProps;
      const { thumbSelected, idx } = this.props;
      if (-1 !== thumbSelected && prevThumbSelected !== thumbSelected && thumbSelected !== idx) {
        this.setState({ no: 0 });
      }
    }

    next() {
      if (!this.animationFinishedFlag) return;
      const { no } = this.state;
      const { over } = this.props;
      if (no + 1 >= length) {
        over(true);
        this.setState({ no: 0 });
        return;
      }
      this.setState({ no: no + 1 });
      this.animationFinishedFlag = false;
    }

    before() {
      if (!this.animationFinishedFlag) return;
      const { no } = this.state;
      const { over } = this.props;
      if (no <= 0) {
        over(false);
        return;
      }
      this.setState({ no: no - 1 });
      this.animationFinishedFlag = false;
    }

    animationFinished() {
      this.animationFinishedFlag = true;
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
          <WrappedComponent {...this.props} no={no} animationFinished={() => this.animationFinished()} />
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

export { transform2SlideElem };