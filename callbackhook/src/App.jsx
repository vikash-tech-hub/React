import { useCallback, useState } from 'react';
import './App.css';
import ChildComponent from './component/childcomponent';

function App() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]); // ✅ Memoized

  return (
    <div>
      <div>
        Count: {count}
      </div>

      <div>
        <button onClick={handleCount}>
          Increment
        </button>
      </div>

      <br />
      <br />

      <div>
        <ChildComponent btn="Click Me" handleCount={handleCount} />
      </div>
    </div>
  );
}

export default App;
