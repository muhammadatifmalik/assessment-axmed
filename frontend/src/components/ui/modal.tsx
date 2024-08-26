import { FC } from 'react';

import SkuForm from '../container/skuForm';
import { ModalProps } from '../../lib/types/components/ui/modal';

const Modal: FC<ModalProps> = ({ isVisible, onClose, onSubmit, data }) => {
  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-lg p-6 max-w-md w-full'>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-semibold mb-4'>Create New SKU</p>
          <span
            className='text-xl cursor-pointer -mt-3 font-bold'
            onClick={onClose}
          >
            X
          </span>
        </div>

        <SkuForm onSubmit={onSubmit} data={data} />
      </div>
    </div>
  );
};

export default Modal;
