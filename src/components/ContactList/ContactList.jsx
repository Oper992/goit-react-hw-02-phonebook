import PropTypes from 'prop-types';

export default function ContactList({
  filteredContacts,
  contacts,
  deleteContact,
}) {
  return (
    <>
      <ul>
        {filteredContacts
          ? filteredContacts().map(({ name, id, number }) => (
              <li key={id}>
                {name}: {number}
                <button type="button" value={name} onClick={deleteContact}>
                  Delete
                </button>
              </li>
            ))
          : contacts.map(({ name, id, number }) => (
              <li key={id}>
                {name}: {number}
                <button type="button" value={name} onClick={deleteContact}>
                  Delete
                </button>
              </li>
            ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filteredContacts: PropTypes.func.isRequired,
};
