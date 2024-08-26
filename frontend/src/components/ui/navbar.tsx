import { FC } from 'react';

import Button from './button';
import { HeaderProps } from '../../lib/types/components/ui/navbar';

const Header: FC<HeaderProps> = ({ onButtonClick }) => {
  return (
    <header className='sticky top-0 bg-white shadow-md p-4 flex justify-between items-center'>
      <div className='text-xl font-bold'>Axmed</div>
      <Button onClick={onButtonClick}>Create New SKU</Button>
    </header>
  );
};

export default Header;
