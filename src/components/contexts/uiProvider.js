import React from 'react';

import UiContext from './uiContext';

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

export default UiProvider;
