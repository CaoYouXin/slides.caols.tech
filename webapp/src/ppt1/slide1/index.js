import React, { Component } from 'react';
import './index.css';

class PPT1Slide1Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World.'
    };
  }

  componentDidUpdate(prevProps) {
    const { no: prevNo } = prevProps;
    const { no, over } = this.props;
    if (prevNo !== no) {
      if (no > 2) {
        over();
        return;
      }

      switch (no) {
        case 0:
          this.setState({ text: 'Hello World.' });
          break;
        case 1:
          this.setState({ text: 'Hi Everyone!' });
          break;
        case 2:
          this.setState({ text: "I'm here to represent some things." });
          break;
        default:
          this.setState({ text: 'Hello World.' });
      }
    }
  }

  render() {
    return (<div className="ppt1-slide1-wrapper mid-box">{this.state.text}</div>);
  }
}

export default PPT1Slide1Component;