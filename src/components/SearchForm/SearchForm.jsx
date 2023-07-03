import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import searchFormStyles from "./Search.module.css";

const SearchForm = ({ onSelectName = () => {} }) => {
  const [name, setName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = e => {
    setName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const searchName = name.trim();
    onSelectName(searchName);
    setSearchParams({ query: searchName });

    reset();
  };

  const reset = () => {
    setName('');
  };

  return (
    <div className={searchFormStyles.formSection}>
      <form onSubmit={onSubmit}>
        <input
          className={searchFormStyles.input}
          type="text"
          name="name"
          value={name}
          placeholder="Enter name to find the movie"
          onChange={onChange}
          required
        />
        <button className={searchFormStyles.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};


SearchForm.propTypes = {
  onSelectName: PropTypes.func.isRequired,
};

export default SearchForm;