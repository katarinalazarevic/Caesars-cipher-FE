import styled from "styled-components";

export const ModalHeaderContainer = styled.div`
  width: 100%;
  height: 16%;
  border-bottom: 1px solid var(--line-color);
`;

export const ModalHeaderText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  gap: 1rem;
`;

export const CloseIcon = styled.img`
  align-self: flex-end;
  padding: 0.7rem;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;