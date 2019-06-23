import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

class Lightbox extends Component {
  render() {
    const { isOpen, images, currentIndex, onClose } = this.props;

    return (
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={onClose}>
            <Carousel views={images} currentIndex={currentIndex} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}

export default Lightbox;
