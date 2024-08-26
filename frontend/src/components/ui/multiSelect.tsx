import { FC, useState } from 'react';

import { MultiSelectDropdownProps } from '../../lib/types/components/ui/multiSelect';

const MultiSelectDropdown: FC<MultiSelectDropdownProps> = ({
  options,
  name,
  value,
  onChange,
  multiple = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    if (multiple) {
      const newValue = Array.isArray(value)
        ? value.includes(option)
          ? value.filter((v) => v !== option)
          : [...value, option]
        : [option];
      onChange(newValue);
    } else {
      onChange(option);
      setIsOpen(false);
    }
  };

  const selectedValues = Array.isArray(value) ? value.join(', ') : value;

  return (
    <div className='relative'>
      <button
        type='button'
        className='w-full p-2 border rounded-md text-left flex justify-between items-center'
        onClick={toggleDropdown}
      >
        <span>{selectedValues || 'Select options'}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className='absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg max-h-56 overflow-y-auto'>
          {options.map((option) => (
            <label
              key={option}
              className='flex items-center p-2 hover:bg-gray-100'
            >
              <input
                type='checkbox'
                name={name}
                value={option}
                checked={
                  multiple
                    ? Array.isArray(value) && value.includes(option)
                    : value === option
                }
                onChange={() => handleSelect(option)}
                className='mr-2'
                disabled={!multiple && value === option}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
