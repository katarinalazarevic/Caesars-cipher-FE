import React from 'react';
import { useField } from 'formik';
import { ErrorDiv, ErrorIcon, ErrorMessage, ErrorMessageDiv, ErrorMessageExclamation, InputField, LabelText } from './input-form.styled';

interface LabelAndInputProps {
  labelText: string;
  type?: string;
  placeholder?: string;
  name: string;
  showExclamation?: boolean;
  disabled?: boolean; 
}

const LabelAndInput: React.FC<LabelAndInputProps> = ({
  labelText,
  type = 'text',
  placeholder,
  name,
  showExclamation = true,
  disabled = false,
}) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <LabelText>{labelText}</LabelText>
      <ErrorDiv>
        <InputField
          type={type}
          placeholder={placeholder}
          {...field}
          disabled={disabled}
          style={{ borderColor: meta.touched && meta.error ? 'var(--error-message)' : 'var(--input-border-color)' }}
        />
        {showExclamation && (
          <ErrorMessageExclamation>
            {meta.touched && meta.error && <ErrorIcon>!</ErrorIcon>}
          </ErrorMessageExclamation>
        )}
      </ErrorDiv>
      <ErrorMessageDiv>
        {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
      </ErrorMessageDiv>
    </div>
  );
};

export default LabelAndInput;