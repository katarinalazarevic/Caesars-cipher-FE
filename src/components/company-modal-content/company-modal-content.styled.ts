import styled from "styled-components";

export const ModalContentStyled = styled.div`
  height: auto;
  padding: 1rem 1.5rem 0rem 1.5rem;
`;

export const LabelAndInputDiv = styled.div`
  width: 25.75rem;
  height: 6.25rem;
  margin-top: 0.625rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  bottom: 0; /* Ensure the button stays at the bottom */
  background-color: var(--modal-bg-color); 
`;