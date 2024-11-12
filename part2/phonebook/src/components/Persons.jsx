import PersonRow from "./PersonRow";

const Persons = ({ persons, onDelete }) => {
  return (
    <div>
      {persons.map((person) => (
        <PersonRow key={person.id} person={person} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Persons;
