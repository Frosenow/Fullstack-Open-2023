import { useState } from "react";

const Button = ({ onClick, reaction }) => {
  return <button onClick={onClick}>{reaction}</button>;
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const StatisticLine = ({ text, value }) => {
  const average = (value["good"] - value["bad"]) / value["all"];
  const positive = value["all"] !== 0 ? `${(value["good"] / value["all"]) * 100} %` : "0 %";
  if (text == "average") {
    return (
      <tr>
        <td>
          {text}: {average}
        </td>
      </tr>
    );
  }
  if (text == "positive") {
    return (
      <tr>
        <td>
          {text}: {positive}
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>
        {text}: {value[text]}
      </td>
    </tr>
  );
};

const Statistic = ({ props }) => {
  return props["all"] ? (
    <>
      <StatisticLine text="good" value={props} />
      <StatisticLine text="neutral" value={props} />
      <StatisticLine text="bad" value={props} />
      <StatisticLine text="all" value={props} />
      <StatisticLine text="average" value={props} />
      <StatisticLine text="positive" value={props} />
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
