import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "redux/filtersSlice";
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);
  
  const handleChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <label>
      <Input
        type="text"
        placeholder="Please enter name"
        value={filter || ''}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};