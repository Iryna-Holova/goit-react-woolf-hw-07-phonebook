import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilter,
  selectIsLoading,
  selectVisibleContacts,
} from 'store/selectors';
import { getContactsThunk } from 'store/contacts/thunks';
import Section from 'components/Section/Section';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Section title={filter ? `Results: ${contacts.length}` : 'Contacts'}>
      {isLoading ? (
        <div className={css.loader}></div>
      ) : error ? (
        <b>Something went wrong...</b>
      ) : (
        <ul className={css.list}>
          {contacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </Section>
  );
};

export default ContactList;
