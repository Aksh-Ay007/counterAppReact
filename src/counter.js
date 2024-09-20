import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);  // State for the counter
  const [showCount, setShowCount] = useState(false);  // State for toggling visibility

  return (
    <div>
      {/* Button to toggle showCount */}
      <button onClick={() => setShowCount(!showCount)}>
        {showCount ? "Hide Count" : "Show Count"}
      </button>
      
      {/* Conditional rendering based on showCount */}
      {showCount && (
        <div>
          <h2>Counter Show Button</h2>
          <h3>Counter is - {count}</h3>

          {/* Increment button */}
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>decrement</button>
        </div>
      )}
    </div>
  );
}

export default Counter;
