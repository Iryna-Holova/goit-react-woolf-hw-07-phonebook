import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiUser, FiPhone, FiX } from 'react-icons/fi';
import { CgSpinner } from 'react-icons/cg';
import { getFilter } from 'store/selectors';
import { deleteContactThunk } from 'store/contacts/thunks';
import { showError } from 'helpers/toaster';
import HighlightSearchResult from 'components/HighlightSearchResult/HighlightSearchResult';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await dispatch(deleteContactThunk(id)).unwrap();
      setIsDeleting(false);
    } catch (error) {
      setIsDeleting(false);
      showError('Deleting failed :(');
    }
  };

  return (
    <li className={css.wrapper}>
      <div className={css.item}>
        <FiUser size={20} className={css.icon} />
        {!filter ? name : <HighlightSearchResult text={name} />}
      </div>
      <div className={css.item}>
        <FiPhone size={20} className={css.icon} />
        {phone}
      </div>
      <button
        className={css.delete_button}
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {!isDeleting ? (
          <FiX size={24} />
        ) : (
          <CgSpinner className={css.loading_icon} />
        )}
      </button>
    </li>
  );
};

export default ContactItem;
