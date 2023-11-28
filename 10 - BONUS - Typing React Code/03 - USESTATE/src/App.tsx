import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [valueStr, setValueStr] = useState<string>();
  const [valueArr, setValueArr] = useState<number[]>([]);

  return (
    <>
      <input type="text" onChange={() => setValue('')} />;
      <input type="text" onChange={(e) => setValueStr(e.target.value)} />;
      <input type="text" onChange={() => setValueArr([1, 2, 3])} />;
    </>
  );
}

export default App;
