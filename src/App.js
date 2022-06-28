import { useState } from 'react';
import { LikeButtonAnimated } from './lib/index';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <LikeButtonAnimated
          disabledButton={false}
          handleLike={() => setCount((a) => a + 1)}
          likes={count}
        />
      </header>
    </div>
  );
}

export default App;
