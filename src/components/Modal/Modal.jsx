import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, alt, closeModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Overlay" onClick={evt => closeModal(evt)}>
      <div className="Modal">
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
