import { FC } from 'react';

import { InputProps } from '../../lib/types/components/ui/input';

const Input: FC<InputProps> = ({ additionClasses, ...rest }) => {
  return (
    <input
      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-200 w-full ${additionClasses}`}
      {...rest}
    />
  );
};

export default Input;
