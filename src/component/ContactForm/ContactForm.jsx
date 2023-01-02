import React, { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ addContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);

    if (name === 'number') setNumber(value);
  };

  const submiteForm = event => {
    event.preventDefault();
    addContacts(name, number);
    setName('');
    setNumber('');
  };
  return (
    <form className={css.ContactForm} onSubmit={submiteForm}>
      <input
        className={css.inputName}
        onChange={inputChange}
        value={name}
        id="1"
        type="text"
        name="name"
        // value={name}
        placeholder="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <input
        className={css.inputTel}
        placeholder="number"
        onChange={inputChange}
        value={number}
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className={css.addContact}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
};
