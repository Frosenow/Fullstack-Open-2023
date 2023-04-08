import { useState } from "react";

const Button = ({ onClick, reaction }) => {
  return <button onClick={onClick}>{reaction}</button>;
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Statistic = ({ props }) => {
  return props["all"] ? (
    <>
      {Object.keys(props).map((opinion) => {
        return (
          <tr>
            <td>
              {opinion}: {props[opinion]}
            </td>
          </tr>
        );
      })}
      <tr>
        <td>average: {(props["good"] - props["bad"]) / props["all"]}</td>
      </tr>
      <tr>
        <td>positive: {props["all"] !== 0 ? `${(props["good"] / props["all"]) * 100} %` : "0 %"}</td>
      </tr>
    </>
  ) : (
    <span>No feedback given</span>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
  });
  const handleGoodClick = () => {
    const goodValue = stats.good + 1;
    const sumValue = stats.all + 1;
    setStats({ ...stats, good: goodValue, all: sumValue });
  };

  const handleNeutralClick = () => {
    const neutralValue = stats.neutral + 1;
    const sumValue = stats.all + 1;
    setStats({ ...stats, neutral: neutralValue, all: sumValue });
  };

  const handleBadClick = () => {
    let badValue = stats.bad + 1;
    const sumValue = stats.all + 1;
    setStats({ ...stats, bad: badValue, all: sumValue });
  };

  return (
    <>
      <Header text="Give feedback" />
      <Button onClick={handleGoodClick} reaction="GOOD"></Button>
      <Button onClick={handleNeutralClick} reaction="NEUTRAL"></Button>
      <Button onClick={handleBadClick} reaction="BAD"></Button>
      <Header text="Statistic" />
      <Statistic props={stats} />
    </>
  );
};

export default App;
