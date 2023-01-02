import React from 'react';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: '1', name: 'Alex  ', number: '413-341-1920' },

      { id: '2', name: 'Robert ', number: '408-955-0658' },

      { id: '3', name: 'Michael  ', number: '323-505-1224' },

      { id: '4', name: 'Francis', number: '845-826-2280' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContactsList = () =>
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  const addContacts = (name, number) => {
    const id = nanoid();
    let error = false;
    contacts.forEach(contact => {
      if (contact.name === name) {
        Notiflix.Notify.warning(`${name} is already in contact`);
        return (error = true);
      }
    });
    if (!error) {
      Notiflix.Notify.success('contact added');
      setContacts([...contacts, { name, number, id }]);
    }
  };

  const filterChange = event => {
    setFilter(event.target.value);
  };

  const deletContact = id => {
    const filterContactsList = contacts.filter(contact => {
      return contact.id !== id;
    });
    Notiflix.Notify.failure('contact deleted');
    setContacts(filterContactsList);
  };

  return (
    <>
      <header className="page-header">
        <h1 className="title-phonebook">Phonebook</h1>
      </header>
      <ContactForm addContacts={addContacts} />
      <div className="conteiner-contact">
        <div className="contact-left-box">
          <h2 className="page-contact">Contacts</h2>
          <Filter value={filter} onChange={filterChange} />
        </div>
        {contacts.length !== 0 ? (
          <ContactList onClick={deletContact} contacts={filterContactsList()} />
        ) : (
          <p className="dont-found">Contact dont found</p>
        )}
      </div>
    </>
  );
};

export default App;
