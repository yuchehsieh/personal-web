import React, { Component, Fragment } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

import UiContext from '../contexts/uiContext';

class Lightbox extends Component {
  // static contextType = UiContext;

  render() {
    const { isOpen, images, currentIndex, onClose } = this.props;

    return (
      <UiContext.Consumer>
        {context => (
          <ModalGateway>
            {isOpen ? (
              <Modal
                onClose={() => {
                  onClose();
                  context.toggleLightboxState();
                }}
              >
                <Carousel views={images} currentIndex={currentIndex} />
              </Modal>
            ) : null}
          </ModalGateway>
        )}
      </UiContext.Consumer>
    );
  }
}

// Lightbox.contextType = UiContext;

export default Lightbox;
