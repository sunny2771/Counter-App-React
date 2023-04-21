import "./styles.css";
import React, { useState, useRef } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [btnName, setBtnName] = useState("Start");
  const intervalIdRef = useRef(null);

  const increaseCount = () => {
    intervalIdRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    setBtnName("Pause");
  };

  const stopCount = () => {
    clearInterval(intervalIdRef.current);
    setBtnName("Start");
  };

  const resetCount = () => {
    setCount(0);
    clearInterval(intervalIdRef.current);
    setBtnName("Start");
  };
  return (
    <>
      <div className="container">
        <h3 className="title">Counter App</h3>
        <div className="outer">
          <p className="count">{count.toString().padStart(2, 0)}</p>
        </div>
        <div className="btns">
          <button
            style={{ marginRight: "40px" }}
            className="btn"
            onClick={btnName === "Pause" ? stopCount : increaseCount}
          >
            {btnName}
          </button>

          <button onClick={resetCount} className="btn">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
