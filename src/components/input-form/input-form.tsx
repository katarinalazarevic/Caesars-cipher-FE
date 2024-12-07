import React from 'react';
import { useField } from 'formik';
import { ErrorDiv, ErrorIcon, ErrorMessage, ErrorMessageDiv, ErrorMessageExclamation, InputField, LabelText } from './input-form.styled';

interface LabelAndInputProps {
  labelText: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean; 
}

const LabelAndInput: React.FC<LabelAndInputProps> = ({
  labelText,
  type = 'text',
  placeholder,
  disabled = false,
}) => {

  return (
    <div>
      <LabelText>{labelText}</LabelText>
      <ErrorDiv>
        <InputField type={type} placeholder={placeholder} disabled={disabled} />
      </ErrorDiv>
    </div>
  );
};

export default LabelAndInput;