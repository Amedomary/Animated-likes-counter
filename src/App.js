import React, { useState } from 'react';
import './App.css';
import { LikeButtonAnimated } from './lib/index';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <LikeButtonAnimated
          disabledButton={false}
          classes={{
            root: 'root',
            icon: 'icon',
            countText: 'text',
          }}
          style={{
            countTextActive: 'gray',
          }}
          handleLike={() => setCount((a) => a + 1)}
          likes={count}
        />
      </header>
    </div>
  );
}

export default App;
