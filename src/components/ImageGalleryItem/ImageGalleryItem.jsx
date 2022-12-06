import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = ({ currentTarget, target, code }) => {
    if (currentTarget === target || code === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <Modal
          largeImageURL={largeImageURL}
          alt={alt}
          closeModal={closeModal}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
};
