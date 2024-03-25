import { useSelector } from 'react-redux';
import { selectFilter } from 'store/selectors';

const HighlightSearchResult = ({ text }) => {
  const filter = useSelector(selectFilter);

  const regex = new RegExp(`(${filter})`, 'gi');
  const parts = text.split(regex);
  const highlightedText = parts.map((part, index) => {
    return part.match(regex) ? <b key={index}>{part}</b> : part;
  });

  return <span>{highlightedText}</span>;
};

export default HighlightSearchResult;
