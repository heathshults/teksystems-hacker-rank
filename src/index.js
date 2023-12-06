import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';


const root = document.getElementById("root");

ReactDOM.render(
  <App
    colorPickerOptions={[
      "#5d77f5",
      "#0fd085",
      "#ffba5b",
      "#f95e62",
      "lightpink",
    ]}
    initialSelectedColor={"black"}
  />,
  root
);
registerServiceWorker();

applyPolyfills().then(() => {
  return defineCustomElements(window);
});
