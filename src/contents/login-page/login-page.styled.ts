import styled from "styled-components";
import { Form as FormikForm } from 'formik';

export const StyledForm = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PasswordToggleIcon = styled.img`
  position: absolute;
  top: calc(50% - 6px);
  right: 19px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--login-pagecontainer-background);
`;

export const Card = styled.div`
  width: 900px; 
  height: 460px; 
  display: flex;
  padding: 1.5rem; 
  border-radius: 3.5rem; 
  box-shadow: 0rem 0.625rem 1.25rem var(--box-shadow);
  background-color: white;
`;

export const ImageContainer = styled.div`
  flex: 1;
  border-radius: 1.875rem;
  width: 100%;
  height: 100%;
`;

export const ImageLogin = styled.img`
height: 100%;
width: 100%;
object-fit: fill;
`

export const FormContainer = styled.div`
padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Title = styled.h2`
  margin: 0px 0px 30px 0px;
  font-size: 28px; 
  color: var(--login-title);
  font-weight: 500;
  line-height: 3.375rem;
`;

export const FormInput = styled.div`
  display:"flex";
  flex-direction:"column";
  width:"100%";

`

export const LoginButton = styled.button`
  background-color: var(--login-button);
  color: white;
  border-radius: 1.25rem;
  border: 0.063rem solid var(--login-button);
  &:hover {
    background-color: var(--login-button-hover);
    cursor: pointer;
  }
  margin-top: 1.25rem; 
  width: 100%;
  height: 50px; 
  font-size: 20px; 
  font-weight: 600;
  text-align: center;
`;

export const ForgotPasswordText = styled.label`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  color: var(--login-forgot-password);
  &:hover {
    cursor: pointer;
  }
  align-self: flex-end;
`;

export const PasswordComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
`;

export const LabelAndImgDiv = styled.div`
  position: relative;
  width: 100%;
`;
