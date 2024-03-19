import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiSearch, FiX } from 'react-icons/fi';
import { getFilter } from 'store/selectors';
import { setFilter } from 'store/filter-slice';
import Section from 'components/Section/Section';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Section>
      <div className={css.wrapper}>
        <span className={css.search}>
          <IconContext.Provider value={{ size: '24px' }}>
            <FiSearch />
          </IconContext.Provider>
        </span>
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.target.value))}
          placeholder="Enter your search keyword"
        />
        <button
          className={css.clear}
          type="button"
          onClick={() => dispatch(setFilter(''))}
        >
          <IconContext.Provider value={{ size: '24px' }}>
            <FiX />
          </IconContext.Provider>
        </button>
      </div>
    </Section>
  );
};

export default Filter;
