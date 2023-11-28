import './App.css';
import Child from './Child';

function App() {
  return (
    <Child
      name="Gourab"
      anyTypeIsRequired={true}
      address={{ street: 'main street', city: 'kolkata' }}
      randomObj={{ adasd: true }}
      age={24}
      peoples={['DAS', 'Dasd']}
      studentsNumberArr={[454, 78, 97, 8, 4]}
      diffTypeArr={[454, 87, true, 54, false]}
      status="Inactive"
      user={{ id: 4545, name: 'DSda' }}
    >
      Hi I am Gourab
    </Child>
  );
}

export default App;
