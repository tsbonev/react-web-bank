import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import Navigator from './components/Navigator'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
    <Navigator />
), document.getElementById('navigator'))

ReactDOM.render((
    <BrowserRouter>
    <App />
    </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
