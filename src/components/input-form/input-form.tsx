import React from 'react';
import { ErrorDiv, InputField, LabelText } from './input-form.styled';

interface LabelAndInputProps {
  labelText: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean; 
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelAndInput: React.FC<LabelAndInputProps> = ({
  labelText,
  type = 'text',
  placeholder,
  disabled = false,
  value,
  onChange,
}) => {

  return (
    <div>
      <LabelText>{labelText}</LabelText>
      <ErrorDiv>
        <InputField type={type} placeholder={placeholder} disabled={disabled} 
        value={value}
        onChange={onChange}/>
      </ErrorDiv>
    </div>
  );
};

export default LabelAndInput;