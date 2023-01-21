import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactsTitle, Phonebook, PhonebookTitle } from './App.styled';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const names = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );
    const lowerCaseName = name.toLowerCase();
    if (names.indexOf(lowerCaseName) >= 0) {
      alert(name + 'is already in contacts');
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
      };
    });
  };
  removeName = idx => {
    this.setState(prevState => {
      let newContacts = [];
      prevState.contacts.forEach(contact => {
        if (contact.id !== idx) {
          newContacts.push(contact);
        }
      });
      return { contacts: newContacts };
    });
  };
  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    let { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const newArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return newArray;
  };
  render() {
    return (
      <>
        <Phonebook>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm onSubmit={this.addContact} />
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter onChange={this.handleFilter} value={this.state.filter} />
          <ContactList
            contacts={this.getVisibleContacts()}
            onRemove={this.removeName}
          />
        </Phonebook>
      </>
    );
  }
}
