type ChildProps = { name: string } & ({ sex: 'Male'; salary: number } | { sex: 'Female'; weight: number });

const Child = (props: ChildProps) => {
  const { name, sex } = props;

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Gender: {sex}</h1>
      {sex === 'Male' ? <h1>Salary: {props.salary}</h1> : <h1>Weight: {props.weight}</h1>}
    </>
  );
};

export default Child;

type Foo<T extends PropertyKey> = {
  name: T;
  age: T;
};

const foo: Foo<PropertyKey> = {
  name: 'Ram',
  age: 45,
};
