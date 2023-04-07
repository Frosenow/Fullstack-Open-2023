import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>GOOD</button>
      <button onClick={() => setNeutral(neutral + 1)}>NEUTRAL</button>
      <button onClick={() => setBad(bad + 1)}>BAD</button>
      <h3>statistic</h3>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
      </ul>
    </>
  );
};

export default App;
