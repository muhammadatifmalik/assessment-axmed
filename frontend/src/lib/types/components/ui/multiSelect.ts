export interface MultiSelectDropdownProps {
  options: string[];
  name: string;
  value: string | string[];
  onChange: (selected: string | string[]) => void;
  multiple?: boolean;
}
