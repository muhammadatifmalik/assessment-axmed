import { FC } from 'react';

import { ButtonProps } from '../../lib/types/components/ui/button';
import Spinner from './spinner';

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  disabled = false,
  additionalClasses,
  loading,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } flex gap-1 items-center ${additionalClasses}`}
      {...rest}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
