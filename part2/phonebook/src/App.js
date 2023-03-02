import { useEffect, useState } from "react";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import Form from "./components/Form";   
import personService from "./service/person";

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [contact, setNewContact] = useState([]);

  const delteHandle = (id) => {
   const nameObj = contact.filter(contact => contact.id === id);
   console.log(nameObj[0]);
    if(window.confirm(`delete ${nameObj[0].name}?`)){
    personService.deletePerson(id).then(hooks);
    }
  };

  const hooks = () => {
    personService.getAll().then(contacts => {setNewContact(contacts)});
  };

  useEffect(hooks, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const duplicateFlag = contact.some((contact) => contact.name === newName);
    const addContact = {
      name: newName,
      number: newNumber,
      id: contact.length + 1,
    };
    if (duplicateFlag) {
      if(window.confirm(`contact on ${addContact.name} already exists change number?`))
      {
        const changedContact = contact.filter(contact => contact.name === addContact.name);
        console.log(changedContact);
        personService.change(changedContact[0].id,addContact).then(hooks);
      }
    } else {
      personService.create(addContact).then(contacts => {
        setNewContact(contact.concat(contacts));
      });
    }
    setNewName("");
    setNewNumber("");
  }

    

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchName={searchName}
        handleSearchChange={handleSearchChange}
      ></Filter>
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      ></Form>
      <Numbers
        value={contact}
        search={searchName}
        delteHandle={delteHandle}
      ></Numbers>
    </div>
  );
};

export default App;
