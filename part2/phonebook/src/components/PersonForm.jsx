import { useState } from "react";

const PersonForm = ({ onSubmit }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    onSubmit(newPerson);
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={newName}
          onChange={handleChangeName}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          name="phone"
          value={newNumber}
          onChange={handleChangeNumber}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
