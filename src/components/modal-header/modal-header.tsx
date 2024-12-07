import { Typography } from "@mui/material";
import { ModalHeaderContainer, ModalHeaderText, CloseIcon } from "./modal-header.styled";

interface ModalHeaderProps{
    text:string;
    onClose: () => void; 
}

export const ModalHeader = ({ text, onClose }: ModalHeaderProps) => {
    return (
      <ModalHeaderContainer>
        <ModalHeaderText>
        <Typography variant="h2">{ text }</Typography>
        <CloseIcon src={"/closeIcon.svg"} onClick={onClose}/>
        </ModalHeaderText>
      </ModalHeaderContainer>
    );
  };