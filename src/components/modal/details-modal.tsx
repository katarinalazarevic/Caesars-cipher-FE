import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ArrowIcon, ArrowRectangle, CloseIcon, ContentContainer, DetailsTitle, LetterRectangle, ModalContainer, Overlay, TextLettersContainer } from "./details-modal.styled";

interface Props {
  text: string,
  encodedText: string,
  onClose: () => void;
}

  export const DetailsModal = ({text, encodedText, onClose}:Props) => {
    const { t } = useTranslation("main");
    const [textArray, setTextArray] = useState<string[]>([]);
    const [encodedTextArray, setEncodedTextArray] = useState<string[]>([]);
    
    useEffect(()=>{
      if(text){
        setTextArray(text.split(""));
      }
    }, [text])
    useEffect(()=>{
      if(encodedText){
        setEncodedTextArray(encodedText.split(""));
      }
    }, [encodedText])

    return (
    <Overlay >
      <ModalContainer>
        <CloseIcon src={"/closeIcon.svg"} onClick={onClose}/>
        <DetailsTitle>{t("details")}</DetailsTitle>
        <ContentContainer>
        <TextLettersContainer>
          {textArray.map(letter => 
            <LetterRectangle>{letter}</LetterRectangle>
          )}
        </TextLettersContainer>
        <TextLettersContainer>
          {textArray.map(letter => 
            <ArrowRectangle><ArrowIcon src={"/down-arrow.svg"} /></ArrowRectangle>
          )}
        </TextLettersContainer>
        <TextLettersContainer>
          {encodedTextArray.map(letter => 
            <LetterRectangle>{letter}</LetterRectangle>
          )}
        </TextLettersContainer>
        </ContentContainer>


      </ModalContainer>
    </Overlay>
    );
  }
  