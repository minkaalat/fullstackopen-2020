import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = ({ text }) => <h1>{text}</h1>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const StatisticLine = ({ text, stats }) => (
  <tr>
    <td>{text}</td>
    <td>{stats}</td>
  </tr>
);
const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" stats={good} />
          <StatisticLine text="neutral" stats={neutral} />
          <StatisticLine text="bad" stats={bad} />
          <StatisticLine text="all" stats={all} />
          <StatisticLine text="average" stats={average} />
          <StatisticLine text="positive" stats={positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + bad + neutral;
  let average;
  let positive;
  if (all === 0) {
    average = 0;
    positive = 0;
  } else {
    average = (good - bad) / all;
    positive = (good / all) * 100;
  }

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Title text="statistics" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={average}
        positive={positive + " %"}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
