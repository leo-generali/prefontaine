import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import reset from './styles/reset';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
