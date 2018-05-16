import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

import { injectGlobal } from 'styled-components';
import reset from './styles/reset';

injectGlobal`
  ${reset}
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
