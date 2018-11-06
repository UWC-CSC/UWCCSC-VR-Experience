import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import WebFont from 'webfontloader';

import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Roboto:400', 'sans-serif']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
