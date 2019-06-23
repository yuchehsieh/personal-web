import React, { Component, Fragment } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { UiContext } from '../../index';

class Lightbox extends Component {
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

export default Lightbox;
