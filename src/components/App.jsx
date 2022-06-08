import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contactName = form.elements.name.value;
    const contactNumber = form.elements.number.value;
    const id = nanoid();

    if (
      this.state.contacts.some(
        ({ name }) => name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      window.alert(`${contactName} is already in contacts`);
    } else {
      this.setState(prevState => {
        const newContactsArray = [...prevState.contacts];
        newContactsArray.push({
          id: id,
          name: contactName,
          number: contactNumber,
        });

        return {
          contacts: newContactsArray,
        };
      });
    }

    form.reset();
  };

  addToFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = evt => {
    this.setState(prevState => {
      const oldContactsArray = [...prevState.contacts];
      const newContactsArray = oldContactsArray.filter(
        ({ name }) => name !== evt.target.value
      );

      return { contacts: newContactsArray };
    });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} addToFilter={this.addToFilter} />
        <ContactList
          contacts={contacts}
          filteredContacts={this.filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
