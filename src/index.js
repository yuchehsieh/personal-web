import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import firebase from '@firebase/app';
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import UiProvider from './components/contexts/uiProvider';

const config = {
    apiKey: 'AIzaSyDAvEkLvZ-1Xxi4zly77vYyPtEZLElzyD0',
    projectId: 'personal-web-5a5e4'
};

firebase.initializeApp(config);

const App = props => {
  return (
    <UiProvider>
      <BrowserRouter>
        <Routes {...props} />
      </BrowserRouter>
    </UiProvider>
  );
};

ReactDOM.render(
    <FirestoreProvider firebase={firebase}>
        <App />
    </FirestoreProvider>
    ,document.getElementById('root')
);

serviceWorker.register();
