import { useState } from "react";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import Form from "./components/Form";

const App = () => {
  const [searchName,setSearchName] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [contact, setNewContact] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

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
    console.log(newName);
    const duplicateFlag = contact.some((contact) => contact.name === newName);
    const addContact = {
      name: newName,
      number : newNumber,
      id: contact.length + 1
    };
    if (duplicateFlag) {
      alert(newName+" is already added to phonebook");
    } else {
      setNewContact(contact.concat(addContact));
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName ={searchName} handleSearchChange = {handleSearchChange}></Filter>
      <Form handleSubmit = {handleSubmit} newName ={newName} handleNameChange ={handleNameChange} newNumber ={newNumber} handleNumberChange ={handleNumberChange}></Form>
      <Numbers value={contact} search={searchName}></Numbers>
    </div>
  );
};

export default App;
