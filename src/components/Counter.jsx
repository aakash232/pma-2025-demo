import React, { useState } from "react";
// import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button
        data-testid="increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        data-testid="decrement-button"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
