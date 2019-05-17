import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import './velocity.scss';
import M from '../node_modules/materialize-css/dist/js/materialize.js';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
