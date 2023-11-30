// import Child from './Child';
import { List } from './List';

function App() {
  // return <Child name="John" sex="Male" salary={10000} />;
  return (
    <List<{ id: number; name: string; age?: number }>
      items={[
        { id: 1, name: 'John', age: 27 },
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Samuel' },
      ]}
      getKey={(item) => item.id}
      renderItem={(item) => <div>{item.name}</div>}
    />
  );
}

export default App;
