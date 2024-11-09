import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const noFeedBackGiven = total === 0;

  const noFeedbackElement = () => <p>No feedback given</p>;

  return (
    <div>
      <h1>Statistics</h1>
      {noFeedBackGiven ? (
        noFeedbackElement()
      ) : (
        <>
          <table>
            <tbody>
              <StatisticLine text="Good" value={good} />
              <StatisticLine text="Neutral" value={neutral} />
              <StatisticLine text="Bad" value={bad} />
              <StatisticLine text="Total" value={total} />
              <StatisticLine
                text="Average"
                value={(good * 1 + neutral * 0 + bad * -1) / total}
              />
              <StatisticLine
                text="Positive"
                value={`${(good / total) * 100} %`}
              />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Statistics;
