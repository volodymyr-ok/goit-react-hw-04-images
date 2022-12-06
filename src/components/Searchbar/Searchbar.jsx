import { useState } from 'react';
import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleInputChange = event => {
    setValue(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      alert('Please, entrie something');
      return;
    }

    onSubmit(event.currentTarget.search.value.toLowerCase());
    setValue('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          🔍
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={value}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
