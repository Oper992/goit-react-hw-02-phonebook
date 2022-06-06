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

    if (this.state.contacts.some(({ name }) => name === contactName)) {
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

  contactsFilter = evt => {
    this.setState({ filter: evt.target.value });
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
    const { contacts, filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm func={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} func={this.contactsFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          func={this.deleteContact}
        />
      </>
    );
  }
}
