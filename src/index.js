// third-party libraries
import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './components/App';

// styles
import './index.css';

// others
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
