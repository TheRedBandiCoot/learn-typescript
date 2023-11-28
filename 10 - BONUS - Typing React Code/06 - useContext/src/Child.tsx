import { useUsersData } from './App';

const Child = () => {
  const { users } = useUsersData();

  return (
    <div>
      <h1>CHild Context Type CHeck With Data</h1>
      <ul>
        {users.map((user) => {
          const { name, id } = user;
          return (
            <li key={id}>
              <h1>{name}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Child;
