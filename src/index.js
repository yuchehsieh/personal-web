import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import UiProvider from './components/contexts/uiProvider';

const App = props => {
  return (
    <UiProvider>
      <BrowserRouter>
        <Routes {...props} />
      </BrowserRouter>
    </UiProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
