import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { setStatusFilter } from 'redux/filterSlice';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <label>
      <Input
        type="text"
        placeholder="Please enter name"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
