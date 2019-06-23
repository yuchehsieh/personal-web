import React from 'react';

const UiContext = React.createContext({
  state: {
    isLightBoxOpen: false
  },
  toggleLightboxState: () => {}
});

export default UiContext;
