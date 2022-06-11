import PropTypes from 'prop-types';
import React from 'react';

export default class ContactList extends React.Component {
  render() {
    const { filteredContacts, deleteContact } = this.props;

    return (
      <>
        <ul>
          {filteredContacts().map(({ name, id, number }) => (
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
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filteredContacts: PropTypes.func.isRequired,
};
