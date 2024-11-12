const PersonRow = ({ person, onDelete }) => {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1em",
    width: "100%",
  };

  const handleDelete = () => {
    onDelete(person.id);
  };

  return (
    <div key={person.id} style={style}>
      <div>{person.name}</div>
      <div>{person.number}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PersonRow;
