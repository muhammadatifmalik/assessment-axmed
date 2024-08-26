import { FC } from 'react';

import { TableProps } from '../../lib/types/components/ui/table';
import Button from './button';

const Table: FC<TableProps> = ({ data }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
        <thead>
          <tr className='bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold'>
            <th className='px-6 py-4'>Medication Name</th>
            <th className='px-6 py-4'>Dose</th>
            <th className='px-6 py-4'>Presentation</th>
            <th className='px-6 py-4'>Unit</th>
            <th className='px-6 py-4'>Countries</th>
            <th className='px-6 py-4'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className='border-b border-gray-200 hover:bg-gray-100'
            >
              <td className='px-6 py-4'>{item.medication_name}</td>
              <td className='px-6 py-4'>{item.dose}</td>
              <td className='px-6 py-4'>{item.presentation}</td>
              <td className='px-6 py-4'>{item.unit}</td>
              <td className='px-6 py-4'>{item.countries.join(', ')}</td>
              <td className='px-6 py-4 flex gap-4'>
                <Button>Edit</Button>
                <Button additionalClasses='bg-red-600 hover:bg-red-700 px-4 py-2 text-white'>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
