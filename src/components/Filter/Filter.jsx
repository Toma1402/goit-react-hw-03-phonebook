import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';
export const Filter = ({ onChange, value }) => {
  return (
    <>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLabel>
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
