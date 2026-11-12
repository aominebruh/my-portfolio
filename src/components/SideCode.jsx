function SideCode() {
  
  const leftCode = `
import React from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    console.log("Clicked!");
  }

  return (
    <div className="app">
      <h1>Hello World</h1>
      <button onClick={handleClick}>
        Click me: {count}
      </button>
    </div>
  );
}

export default App;
  `

  
  const rightCode = `
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0f0f11;
  color: #00ff88;
}

.card {
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #2a2a30;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  border-color: #00ff88;
}
  `

  return (
    <>
      <div className="side-code left-code">
        <pre>{leftCode.repeat(6)}</pre>
      </div>
      <div className="side-code right-code">
        <pre>{rightCode.repeat(8)}</pre>
      </div>
    </>
  )
}
export default SideCode