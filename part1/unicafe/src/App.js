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

  return (
    <>
      <Header text="Give feedback" />
      <Button onClick={() => setGood(good + 1)} reaction="GOOD"></Button>
      <Button onClick={() => setNeutral(neutral + 1)} reaction="NEUTRAL"></Button>
      <Button onClick={() => setBad(bad + 1)} reaction="BAD"></Button>
      <Header text="Statistic" />
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
    </>
  );
};

export default App;
