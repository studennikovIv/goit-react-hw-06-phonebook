import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => (
  <ul className={css.contactList}>
    {contacts.map(({ name, number, id }) => (
      <li className={css.contactList__li} id={id} key={Math.random()}>
        <span className={css.name}>{name}</span>
        <span>{number}</span>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            onClick(id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.any.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactList;
