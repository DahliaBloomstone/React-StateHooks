/* //We import the useState Hook from React. It lets us keep local state in a function component.
import React, { useState } from 'react';
import './App.css'

const App = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  //In a function, we already have setCount and count as variables so we don’t need this:
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;