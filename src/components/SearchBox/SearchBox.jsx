import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filters/slice.js';
import { selectNameFilter } from '../../redux/filters/selectors.js';
import './SearchBox.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleSearchChange = event => {
    dispatch(setNameFilter(event.target.value));
  };

  return (
    <div className="search-box">
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={handleSearchChange}
        placeholder=""
      />
    </div>
  );
};

export default SearchBox;