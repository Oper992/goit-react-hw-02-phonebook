import PropTypes from 'prop-types';

export default function ContactList({ contacts, filter, func }) {
  const filteredContactsArray = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul>
        {filter
          ? filteredContactsArray.map(({ name, id, number }) => (
              <li key={id}>
                {name}: {number}
                <button type="button" value={name} onClick={func}>
                  Delete
                </button>
              </li>
            ))
          : contacts.map(({ name, id, number }) => (
              <li key={id}>
                {name}: {number}
                <button type="button" value={name} onClick={func}>
                  Delete
                </button>
              </li>
            ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
