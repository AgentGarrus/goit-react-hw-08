import ContactList from '../components/ContactList/ContactList.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';

const ContactsPage = () => (
  <div className="app-container">
    <div className="form-container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
    </div>
    <ContactList />
  </div>
);

export default ContactsPage;