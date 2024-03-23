import MainTitle from './MainTitle/MainTitle';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <MainTitle />
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer />
    </>
  );
};

export default App;
