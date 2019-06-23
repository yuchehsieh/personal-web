import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

export const UiContext = React.createContext({
  state: {
    isLightBoxOpen: false
  },
  toggleLightboxState: () => {}
});

class UiProvider extends React.Component {
  state = {
    isLightBoxOpen: false
  };

  toggleLightboxState = () => {
    this.setState({ isLightBoxOpen: !this.state.isLightBoxOpen });
  };

  render() {
    return (
      <UiContext.Provider
        value={{
          state: this.state,
          toggleLightboxState: this.toggleLightboxState
        }}
      >
        {this.props.children}
      </UiContext.Provider>
    );
  }
}

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
