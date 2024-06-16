import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';
import Contact from '../Contact/Contact.jsx';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} onDelete={handleDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;