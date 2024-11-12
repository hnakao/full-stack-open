import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const response = await axios.get("http://localhost:3001/persons");
      setPersons(response.data);
    };

    fetchPersons();
  }, []);

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
