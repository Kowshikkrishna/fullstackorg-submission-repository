import { useState } from "react";

const Statistics  = (props) => {
  if (props.flag) {
    return (
      <>
        <h2>stats</h2>
        <table>
          <StatisticLine text="good" value = {props.good}></StatisticLine>
          <StatisticLine text="neutral" value = {props.neutral}></StatisticLine>
          <StatisticLine text="bad" value = {props.bad}></StatisticLine>
          <StatisticLine text="all" value = {props.all}></StatisticLine>
          <StatisticLine text="avg" value = {props.avg}></StatisticLine>
          <StatisticLine text="percentage" value = {props.percentage}></StatisticLine>
        </table>
      </>
    );
  } else {
    return (
      <>
        <h2>stats</h2>
        <p>Please enter stats</p>
      </>
    );
  }
};

const StatisticLine  = (props) => {
  return(<tr>
    <td>{props.text} {props.value.toFixed(2)}</td>
  </tr>)
};


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [flag, setFlag] = useState(false);

  const all = good + neutral + bad;

  const avg = (good - bad) / all;

  const percentage = (good / all ) * 100;

  return (
    <div>
      <h2>Give feedBack</h2>
      <button
        onClick={() => {
          setGood(good + 1);
          setFlag(true);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
          setFlag(true);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
          setFlag(true);
        }}
      >
        bad
      </button>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        percentage={percentage}
        flag={flag}
      ></Statistics >
    </div>
  );
};

export default App;
