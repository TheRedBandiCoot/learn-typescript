import { createContext, useContext, useEffect, useState } from 'react';
import Child from './Child';

type User = {
  id: string;
  name: string;
  age: number;
};

type AddUser = { name: string; age: number };

type ContextType = {
  users: User[];
  addUser: ({ name, age }: AddUser) => void;
};

const Context = createContext<ContextType | null>(null);
export function useUsersData() {
  const usersContext = useContext(Context);
  if (usersContext == null) {
    throw new Error('Must Use Within Provider');
  }
  return usersContext;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  function addUser({ name, age }: AddUser) {
    setUsers((prev) => [...prev, { id: crypto.randomUUID(), name: name, age: age }]);
  }

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <>
      <Context.Provider value={{ users, addUser }}>
        <Child />
      </Context.Provider>
    </>
  );
}

export default App;

function getUsers() {
  return Promise.resolve([
    { id: crypto.randomUUID(), name: 'John', age: 45 },
    { id: crypto.randomUUID(), name: 'Kyle', age: 34 },
  ]);
}
