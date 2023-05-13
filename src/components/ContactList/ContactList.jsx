import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  const contactsArray = Array.isArray(contacts) ? contacts : [];

  return (
    <Contacts>
      <ContactItem contacts={contactsArray} onDelete={onDelete} />
    </Contacts>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onDelete: PropTypes.func.isRequired,
};