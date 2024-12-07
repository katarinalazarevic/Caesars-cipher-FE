import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position:  absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--header-bg-color);
  border-radius: 20px;
  width: 460px;
  z-index: 1000;
`;

export const ButtonM = styled.button`
    height: 50px;
    width: 50%;
`

export const ImageContainer = styled.div`
  background-image: url('/trashCan.svg');
  background-size: cover;
  background-position: center;
  height: 50px;
  width: 50px;
  margin-top: 20px;
`;


export const Message = styled.p`
  font-size: 1rem;
  align-self: flex-start;
  padding: 0px 20px 0px 20px;
  color: #666;
  margin-bottom: 1.5rem;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:10px;
  border-top: 1px solid var(--modal-border-top);
`;
