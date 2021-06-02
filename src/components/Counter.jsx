import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(state => state + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type='button' onClick={increment}>
        Increment
      </button>
    </div>
  )
}
