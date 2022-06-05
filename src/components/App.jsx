import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contactName = form.elements.name.value;
    const contactNumber = form.elements.number.value;
    const id = nanoid();
    const contactsState = this.state.contacts;
    contactsState.push({ id: id, name: contactName, number: contactNumber });

    this.setState({
      contacts: contactsState,
    });

    form.reset();
  };

  Contacts({ contacts, filter }) {
    const filteredContactsArray = contacts.filter(({ name }) =>
      name.includes(filter)
    );

    return (
      <>
        <ul>
          {filter
            ? filteredContactsArray.map(({ name, id, number }) => (
                <li key={id}>
                  {name}: {number}
                </li>
              ))
            : contacts.map(({ name, id, number }) => (
                <li key={id}>
                  {name}: {number}
                </li>
              ))}
        </ul>
      </>
    );
  }

  contactsFilter = evt => {
    const inputText = evt.target.value.toLowerCase();

    this.setState({ filter: inputText });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input type="filter" value={filter} onChange={this.contactsFilter} />
        <this.Contacts contacts={contacts} filter={filter} />
      </>
    );
  }
}
