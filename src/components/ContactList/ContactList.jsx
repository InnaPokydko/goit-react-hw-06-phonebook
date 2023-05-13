import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

const ContactList = ({ onDelete }) => {
  const contacts = useSelector(state => state.contacts.contactsArr);

  return (
    <Contacts>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </Contacts>
  );
};

export default ContactList;

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};







