import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { addPerson, deletePerson, getAllPersons } from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const persons = await getAllPersons();
      setPersons(persons);
    };

    fetchPersons();
  }, []);

  const onSubmit = async (newPerson) => {
    const alreadyExists = persons.find(
      (person) => person.name === newPerson.name
    );

    if (alreadyExists) {
      alert(`${newPerson.name} is already added to the phonebook`);
      return;
    }

    const createdPerson = await addPerson(newPerson);
    setPersons([...persons, createdPerson]);
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setPersons(filteredPersons);
  };

  const handleDelete = async (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (
      window.confirm(`Are you sure you want to delete ${personToDelete.name}?`)
    ) {
      await deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={onSubmit} />
      <h3>Numbers</h3>
      <Persons persons={persons} onDelete={handleDelete} />
    </div>
  );
};

export default App;
