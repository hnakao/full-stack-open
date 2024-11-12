import axios from "axios";

const getAllPersons = async () => {
  const response = await axios.get("http://localhost:3001/persons");
  return response.data;
};

const addPerson = async (newPerson) => {
  const response = await axios.post("http://localhost:3001/persons", newPerson);
  return response.data;
};

const updatePerson = async (person) => {
  const response = await axios.put(
    `http://localhost:3001/persons/${person.id}`,
    person
  );
  return response.data;
};

const deletePerson = async (id) => {
  const response = await axios.delete(`http://localhost:3001/persons/${id}`);
  return response.data;
};

export { getAllPersons, addPerson, updatePerson, deletePerson };
