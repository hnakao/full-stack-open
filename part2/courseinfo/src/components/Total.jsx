const Total = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises);
  const total = exercises.reduce((a, b) => a + b, 0);
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Total of {total} exercises</p>
    </div>
  );
};

export default Total;
