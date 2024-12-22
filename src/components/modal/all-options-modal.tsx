import { useTranslation } from 'react-i18next';
import { CloseIcon, DetailsTitle, ModalContainer, ModalContainerOptions, Overlay, Word, WordList } from './details-modal.styled'
import { useEffect, useState } from 'react';

export interface Props {
    text: string[],
    encodedText?: string | null,
    onClose: () => void;
  }

export const AllOptionsModal = ({ text, encodedText, onClose }: Props) => {
  const { t } = useTranslation("main");
  const [textArray, setTextArray] = useState<string[]>([]);

    return (
    <Overlay>
      <ModalContainerOptions>
        <CloseIcon src={"/closeIcon.svg"} onClick={onClose} />
        <DetailsTitle>{t("allOptions")}</DetailsTitle>
        <WordList>
          {text.map((word, index) => (
            <Word key={index}>
            <span>{index + 1}. </span> 
            {word}
          </Word>
          ))}
        </WordList>
      </ModalContainerOptions>
    </Overlay>
  );
};
