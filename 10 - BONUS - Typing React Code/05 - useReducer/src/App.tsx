import { useReducer, useState } from 'react';
import './App.css';
type State = {
  count: number;
};

type Action =
  | {
      type: 'INCREMENT';
      incrementBy: number;
    }
  | {
      type: 'DECREMENT';
      decrementBy: number;
    };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { ...state, count: state.count - action.decrementBy };
    default:
      throw new Error('Invalid');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => dispatch({ type: 'DECREMENT', decrementBy: 1 })}>-</button>
      <h1 style={{ padding: '0 50px' }}>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', incrementBy: 1 })}>+</button>
    </div>
  );
}

export default App;
