import type { ComponentProps } from 'react';
import Child from './Child';

type ButtonType = {
  outline: boolean;
} & ComponentProps<'button' | typeof Child>;

const Button = ({ outline, ...props }: ButtonType) => {
  return (
    <button style={{ border: outline ? '1px solid red' : undefined }} {...props}>
      Click ME
    </button>
  );
};

export default Button;
