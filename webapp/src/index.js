import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { configStore } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TWEEN from '@tweenjs/tween.js';

const loop = () => {
  TWEEN.update();
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);

ReactDOM.render(<Provider store={configStore()}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
