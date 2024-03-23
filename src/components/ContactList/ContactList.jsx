import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'store/selectors';
import { getContactsThunk } from 'store/contacts/thunks';
import Section from 'components/Section/Section';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filter ? filterContacts() : contacts;

  return (
    <Section
      title={filter ? `Results: ${filteredContacts.length}` : 'Contacts'}
    >
      {isLoading ? (
        <div className={css.loader}></div>
      ) : error ? (
        <b>Something went wrong...</b>
      ) : (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </Section>
  );
};

export default ContactList;
