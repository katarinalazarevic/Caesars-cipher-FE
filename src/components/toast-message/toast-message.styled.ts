import styled, { keyframes } from "styled-components";


const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ToastContainer = styled.div<{ $backgroundColor: string }>`
display: flex;
  align-items: center;
  background-color: ${({ $backgroundColor }) => `var(${$backgroundColor})`};
  border-radius: 24px;
  width: 338px;
  height: 78px;
  padding: 0px 16px 0px 16px;
  margin-top:5px;
  animation: ${fadeOut} 4s ease-out forwards;
  animation-delay:2s;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-right: 16px;
  padding-top: 4px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const DateText = styled.div`
  font-size: 12px;
  color: #666;
`;
export const ToastContent = styled.div`
    display: flex;
    width: 100%;
`
export const ToastIcon = styled.img`
  width: 24px;
  height: 24px;
`;
export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;