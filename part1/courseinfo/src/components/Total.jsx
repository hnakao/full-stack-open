const Total = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises);
  const total = exercises.reduce((a, b) => a + b, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

export default Total;
