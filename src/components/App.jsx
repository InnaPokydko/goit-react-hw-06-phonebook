import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, SecondTitle } from './App.styled';
import { addContact, deleteContact } from 'redux/contactListSlice';
import { setStatusFilter } from 'redux/filtersSlice';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addContactHandler = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const changeFilterHandler = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  const filterContactList = () => {
    if (filter === 'completed') {
      return contacts.filter(contact => contact.completed);
    } else if (filter === 'active') {
      return contacts.filter(contact => !contact.completed);
    }
    return contacts;
  };
 
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContactHandler} />
      <SecondTitle>Contacts</SecondTitle>
      <Filter value={filter} onChange={changeFilterHandler} />
      <ContactList
        contacts={filterContactList()}
        onDelete={deleteContactHandler}
      />
    </Container>
  );
}
