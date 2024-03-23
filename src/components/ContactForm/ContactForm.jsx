import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiUser, FiPhone } from 'react-icons/fi';
import { getContacts } from 'store/selectors';
import { addContactThunk } from 'store/contacts/thunks';
import Section from 'components/Section/Section';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contacts = useSelector(getContacts);
  const nameInput = useRef(null);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const normalizedName = formData.name.toLowerCase();
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    if (isExist) {
      nameInput.current.focus();
      return alert(`${formData.name} is already in contacts.`);
    }
    try {
      setIsSubmitting(true);
      await dispatch(addContactThunk(formData)).unwrap();
      setFormData(INITIAL_STATE);
    } catch (error) {
      alert('Action failed :(');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.field}>
          <IconContext.Provider
            value={{ size: '16px', className: css.field_icon }}
          >
            <FiUser />
          </IconContext.Provider>
          <input
            className={css.input}
            type="text"
            name="name"
            value={formData.name}
            id="name"
            onChange={handleChange}
            ref={nameInput}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.label} htmlFor="name">
            Name
          </label>
        </div>
        <div className={css.field}>
          <IconContext.Provider
            value={{ size: '16px', className: css.field_icon }}
          >
            <FiPhone />
          </IconContext.Provider>
          <input
            className={css.input}
            type="tel"
            name="phone"
            value={formData.phone}
            id="phone"
            onChange={handleChange}
            placeholder="Number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <label className={css.label} htmlFor="phone">
            Number
          </label>
        </div>

        <button
          className={css.add_button}
          type="submit"
          disabled={isSubmitting}
        >
          {!isSubmitting ? 'Add contact' : 'Loading...'}
        </button>
      </form>
    </Section>
  );
};

export default ContactForm;
