import styled from "styled-components";

export const LabelText = styled.label`
  height: 1.0625rem; 
  width: 2.5rem; 
  font-size: 0.875rem; 
  font-weight: 600;
  line-height: 1.25rem; 
  color: var(--input-form-label-text);
`;

export const InputField = styled.input`
  width: 100%; 
  height: 1.5rem; 
  border-radius: 1.25rem; 
  border: 0.125rem  solid var(--input-border-color); 
  font-size: 1rem; 
  padding: 12px 24px 12px 24px;
  &:hover {
    border: 0.125rem solid var(--input-border-color-hover) !important; 
  }
  margin-top: 6px;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 0.625rem; 
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: var(--error-message);
  font-size: 0.875rem; 
  margin-top: 0.1875rem; 
  margin-left: 1.5rem;
`;

export const ErrorIcon = styled.div`
  color: var(--error-message);
  font-size: 1.5625rem; 
  margin-left: 0.3125rem; 
  width: 0.5rem; 
`;

export const ErrorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessageDiv = styled.div`
  display: flex;
  height: 1.25rem; 
`;

export const ErrorMessageExclamation = styled.div`
  display: flex;
  height: 2.25rem; 
  width: 0.5rem; 
`;
