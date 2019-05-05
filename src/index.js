import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import '../node_modules/materialize-css/dist/css/materialize.css';
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import './velocity.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
