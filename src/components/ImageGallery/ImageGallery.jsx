import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const ImageGallery = ({ status, imageList, loadMore }) => {
  if (status === 'resolved' || status === 'pending') {
    return (
      <>
        <ul className="ImageGallery">
          {imageList.length > 0 &&
            imageList.map(image => {
              const { id, webformatURL, largeImageURL, user } = image;

              return (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  alt={user}
                />
              );
            })}
        </ul>
        {status === 'pending' ? <Loader /> : <Button loadMore={loadMore} />}
      </>
    );
  }
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
