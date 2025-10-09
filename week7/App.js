import React, { useState } from 'react';

function App() {
  // Step 1: Create a state variable for count
  const [count, setCount] = useState(0);

  // Step 2: Create functions to update the state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Step 3: Return UI
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px', padding: '10px' }}>Reset</button>
    </div>
  );
}

export default App;
