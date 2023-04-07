import { useState } from "react";

const Button = ({ onClick, reaction }) => {
  return <button onClick={onClick}>{reaction}</button>;
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}: {value}
      </td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [sum, setSum] = useState(0);

  const handleGoodClick = () => {
    let goodValue = good + 1;
    setGood(goodValue);
    let newSum = sum + 1;
    setSum(newSum);
  };

  const handleNeutralClick = () => {
    let neutralValue = neutral + 1;
    setNeutral(neutralValue);
    let newSum = sum + 1;
    setSum(newSum);
  };

  const handleBadClick = () => {
    let badValue = bad + 1;
    setBad(badValue);
    let newSum = sum + 1;
    setSum(newSum);
  };

  return (
    <>
      <Header text="Give feedback" />
      <Button onClick={handleGoodClick} reaction="GOOD"></Button>
      <Button onClick={handleNeutralClick} reaction="NEUTRAL"></Button>
      <Button onClick={handleBadClick} reaction="BAD"></Button>
      <Header text="Statistic" />
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic text="average" value={(good + neutral + bad) / 3} />
      <Statistic text="positive" value={good > 0 ? `${(good / sum) * 100}%` : `0%`} />
    </>
  );
};

export default App;
