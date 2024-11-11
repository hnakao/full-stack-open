import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const onSubmit = (newPerson) => {
    const alreadyExists = persons.find(
      (person) => person.name === newPerson.name
    );

    if (alreadyExists) {
      alert(`${newPerson.name} is already added to the phonebook`);
      return;
    }

    setPersons([...persons, newPerson]);
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setPersons(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={onSubmit} />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
