import { useState } from 'react';
import Button from './Button';
import Child from './Child';

const App = () => {
  return (
    <>
      <Child name="Subho" isComplete>
        <span>This is child</span>
      </Child>
      <Button outline disabled isComplete />
    </>
  );
};

export default App;
