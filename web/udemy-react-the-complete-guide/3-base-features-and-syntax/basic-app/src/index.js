import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDom renders all of the components
// Typically we render only one root component - the App component, and in there will render all of the nested components
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
