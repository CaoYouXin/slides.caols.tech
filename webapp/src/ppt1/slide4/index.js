import React, { Component } from 'react';
import './index.css';

class PPT1Slide4Component extends Component {
  render() {
    return (
      <div className="ppt1-slide4-wrapper mid-box">
        <input style={{ "transform": "scale(3.141592653)", "transformOrigin": "50% 50%", "borderRadius": "1px", "outline": "none", "boxShadow": "0px 0px 10px #789789" }} type="text" onKeyDown={(e) => {
          console.log(`key=${e.key}, keyCode=${e.keyCode}, alt=${e.altKey}, ctrl=${e.ctrlKey}, shift=${e.shiftKey}, cmd=${e.metaKey}`);
        }} placeholder="输入你的愿望吧……" />
      </div>
    );
  }
}

export default PPT1Slide4Component;