import LabelAndInput from "src/components/input-form/input-form"
import { ContentWrapper, InputDiv, MainPageWrapper, PrimaryButtonContainer, WrapperInput } from "./main-page-content.styled"
import { useTranslation } from "react-i18next";
import PrimaryButton from "src/components/button/primary-button";
import { useState } from "react";
import { encodeSentence } from "src/services/mainService";
import { DetailsModal } from "src/components/modal/details-modal";

export const MainPageContent = () => {
    const { t } = useTranslation("main");
    const [text, setText] = useState("");
    const [shiftNumber, setShiftNumber] = useState(Number);
    const [isModalShown, setIsModalShown] = useState(false);
    const [encodedText, setEncodedText] = useState("");

    const handleOnClick = async () => {
      var response = await encodeSentence(text, shiftNumber, "en-US");
      setEncodedText(response);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    };

    const handleInputNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value); 
      setShiftNumber(value);
    };

    return (<>
      <MainPageWrapper>
        <ContentWrapper>
          <WrapperInput>
            <InputDiv style={{width:"330px"}} >
              <LabelAndInput
                labelText={t("text")}
                placeholder={t("textPlaceHolder")}
                value={text}
                onChange={handleInputChange}
              />
            </InputDiv>
            <InputDiv style={{width:"200px"}}>
              <LabelAndInput
                labelText={t("shift")}
                placeholder={t("shiftPlaceHolder")}
                value={shiftNumber}
                onChange={handleInputNumberChange}
              />
            </InputDiv>
          </WrapperInput>
          <div style={{ display: "flex" , marginLeft:"32rem"}}>
            <PrimaryButton
              onClick={handleOnClick}
              $bgColor="--button"
              $textColor="--input-form-label-text"
              $borderColor="--input-form-label-text"
              $hoverColor="--cancel-hover-color"
              $width="5.5rem"
            >
              {t("submit")}
            </PrimaryButton>
          </div>
        </ContentWrapper>
        {encodedText != "" && <ContentWrapper>
          <WrapperInput>
            <InputDiv style={{width:"330px"}} >
              <LabelAndInput
                labelText={t("encodedText")}
                value={encodedText}
                onChange={()=>{}}
                disabled
              />
            </InputDiv>
            <PrimaryButtonContainer>
              <PrimaryButton
                onClick={() => setIsModalShown(true)}
                $bgColor="--button"
                $textColor="--input-form-label-text"
                $borderColor="--input-form-label-text"
                $hoverColor="--cancel-hover-color"
                $width="7rem"
              >
                {t("details")}
              </PrimaryButton>
            </PrimaryButtonContainer>
          </WrapperInput>
        </ContentWrapper>}
        {isModalShown && <DetailsModal text={text} encodedText={encodedText} onClose={() => setIsModalShown(false)}/>}
      </MainPageWrapper>
        </>
    );
  }
  