import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
export const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }, index) => (
        <ContactItem
          key={id}
          name={name}
          idx={id}
          number={number}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onRemove: PropTypes.func.isRequired,
};
