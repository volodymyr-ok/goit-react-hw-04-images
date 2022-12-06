import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { searchByAPI } from '../services/searchByAPI';
import PropTypes from 'prop-types';

export const App = () => {
  const [status, setStatus] = useState('idle');
  const [entrie, setEntrie] = useState('');
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    if (!entrie) {
      return;
    }
    setStatus('pending');

    searchByAPI(entrie, page)
      .then(response => {
        if (!response.hits.length) {
          throw new Error('Нічого не знайдено');
        }
        setImageList([...imageList, ...response.hits]);
        setStatus('resolved');
      })
      .catch(e => {
        alert(e.message);
        setStatus('rejected');
      });
  }, [entrie, page]);

  const handleSearchbarSubmit = entrie => {
    setEntrie(entrie);
    setPage(1);
    setImageList([]);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchbarSubmit} />
      <ImageGallery
        status={status}
        imageList={imageList}
        loadMore={() => setPage(prevPage => prevPage + 1)}
      />
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

ImageGallery.propTypes = {
  status: PropTypes.string.isRequired,
  imageList: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
};
