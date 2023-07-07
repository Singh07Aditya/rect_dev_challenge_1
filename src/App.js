import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <StepNum />
    </div>
  );
}

function StepNum() {
  const [step, setStep] = useState(1);
  const stepDcrease = () => setStep((s) => s - 1);
  const stepIncrease = () => setStep((s) => s + 1);

  return (
    <>
      <div className="step">
        <button onClick={stepDcrease}>-</button>
        <span>Step: {`${step}`}</span>
        <button onClick={stepIncrease}>+</button>
      </div>
      <CountNum step={step} />
    </>
  );
}

function CountNum({ step }) {
  const [count, setCount] = useState(0);
  console.log(step);
  const countDecrease = () => setCount((c) => c - step);
  const countIncrease = () => setCount((c) => c + step);
  return (
    <>
      <div className="step">
        <button onClick={countDecrease}>-</button>
        <span>Count: {`${count}`}</span>
        <button onClick={countIncrease}>+</button>
      </div>
      <DateInfo count={count} />
    </>
  );
}

function DateInfo({ count }) {
  const currentDate = new Date("june 21 2027");
  currentDate.setDate(currentDate.getDate() + count);
  return (
    <>
      {count >= 0 ? (
        <div>
          <p>{`${count} days from today is ${currentDate}`}</p>
        </div>
      ) : (
        <div>
          <p>{`0 days from today is ${currentDate} `}</p>
        </div>
      )}
    </>
  );
}
