import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (e) => {
    e.preventDefault();

    if (newName.trim() === "") {
      alert("Please add a valid name");
      return;
    }

    const alreadyExists = persons.find((person) => person.name === newName);

    if (alreadyExists) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons([...persons, { name: newName }]);
    setNewName("");
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input type="text" value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
