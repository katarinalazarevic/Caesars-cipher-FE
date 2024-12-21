import styled from "styled-components";

export const Overlay = styled.div`
display: flex;
position: absolute;
top: 0;
left: 0;
justify-content: center;
width:100%;
height:100%;
z-index: 1000;
`

export const ModalContainer = styled.div`
position:relative;
min-width:750px;
padding: 30px;
height:500px;
background-color: #a9d893;
border-radius: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid rgba(0,0,0,0.3);
`

export const DetailsTitle = styled.div`
position:absolute;
top: 15px;
left: 25px;
font-weight: 500;
font-size: 32px;
`

export const CloseIcon = styled.img`
position:absolute;
top: 0;
right: 0;
  padding: 0.7rem;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
`

export const TextLettersContainer = styled.div`
display: flex;
gap:10px;
`

export const LetterRectangle = styled.div`
width:55px;
height:55px;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid rgba(0,0,0,0.3);
`

export const ArrowRectangle = styled.div`
width:55px;
height:55px;
border-left: 1px solid transparent;
border-right: 1px solid transparent;
`

export const ArrowIcon = styled.img`
  height: 100%;
`;