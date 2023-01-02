import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <input
      className={css.filter}
      placeholder="Find contacts by name"
      value={value}
      type="name"
      onChange={onChange}
    />
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
export default Filter;
