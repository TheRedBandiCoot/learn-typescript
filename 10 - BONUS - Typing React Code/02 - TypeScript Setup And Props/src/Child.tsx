import type { ReactNode } from 'react';
type ChildProps = {
  name?: string;
  children?: ReactNode;
  isComplete: boolean;
};

function Child({ name, children }: ChildProps) {
  return (
    <>
      <h1>HI Child {name}</h1>
      <strong>Children : {children}</strong>
      <AnotherChild name="Gourab" isComplete />
    </>
  );
}

export default Child;

const AnotherChild: React.FC<ChildProps> = ({ name = 'TheRedBandiCoot' }) => {
  return <h1>Another Child {name}</h1>;
};

// AnotherChild.defaultProps = { name: 'dasdsdas' };
