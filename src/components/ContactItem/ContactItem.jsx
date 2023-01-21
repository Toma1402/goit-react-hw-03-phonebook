import PropTypes from 'prop-types';
import { ListItem, RemoveBtnContact } from './ContactItem.styled';
export const ContactItem = ({ name, idx, number, onRemove }) => {
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <RemoveBtnContact
        type="button"
        onClick={() => {
          onRemove(idx);
        }}
      >
        Remove
      </RemoveBtnContact>
    </ListItem>
  );
};
ContactItem.propTypes = {
  idx: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
