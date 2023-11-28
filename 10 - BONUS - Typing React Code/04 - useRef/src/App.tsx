import { useRef } from 'react';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const value = useRef<number>();

  value.current = 10;

  inputRef.current?.focus();

  inputRef.current = 'Das';

  return <input type="text" ref={inputRef} />;
}

export default App;
