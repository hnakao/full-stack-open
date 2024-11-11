const Filter = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="search">Filter shown with: </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by name"
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
