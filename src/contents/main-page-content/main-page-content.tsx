import LabelAndInput from "src/components/input-form/input-form";
import {
  ContentWrapper,
  InputDiv,
  MainPageWrapper,
  WrapperInput,
} from "./main-page-content.styled";
import { useTranslation } from "react-i18next";
import PrimaryButton from "src/components/button/primary-button";
import { useState } from "react";
import { encodeSentence } from "src/services/mainService";
import { LabelText } from "src/components/input-form/input-form.styled";
import {
  LanguageSelectorWrapper,
  StyledSelect,
  OptionStyled,
} from "src/components/primary-header/primary-header.styled";

const languageOptions: string[] = ["sr-Latin", "sr-Cyrilic", "en-US"];

export const MainPageContent = () => {
  const { t } = useTranslation("main");
  const [text, setText] = useState("");
  const [shiftNumber, setShiftNumber] = useState(Number);
  const [response, setResponse] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en-US")

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  const handleOnClick = async () => {
    var result = await encodeSentence(text, shiftNumber, selectedLanguage);
    setResponse(result);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleInputNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setShiftNumber(value);
  };

  return (
    <MainPageWrapper>
      <ContentWrapper>
        <WrapperInput>
          <InputDiv style={{ width: "330px" }}>
            <LabelAndInput
              labelText={t("text")}
              placeholder={t("textPlaceHolder")}
              value={text}
              onChange={handleInputChange}
            />
          </InputDiv>
          <InputDiv style={{ width: "200px" }}>
            <LabelAndInput
              labelText={t("shift")}
              placeholder={t("shiftPlaceHolder")}
              value={shiftNumber}
              onChange={handleInputNumberChange}
            />
          </InputDiv>
          <LanguageSelectorWrapper>
            <StyledSelect
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              {languageOptions.map((option) => (
                <OptionStyled key={option} value={option}>
                  {option}
                </OptionStyled>
              ))}
            </StyledSelect>
          </LanguageSelectorWrapper>
        </WrapperInput>
        <div style={{ display: "flex", marginLeft: "32rem" }}>
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

        {response && (
          <WrapperInput style={{ flexDirection: "column" }}>
            <div style={{ marginTop: "1rem", color: "green" }}>
              <LabelText>Sifriran tekst: </LabelText>
              <LabelText>{response}</LabelText>
            </div>
          </WrapperInput>
        )}
      </ContentWrapper>
    </MainPageWrapper>
  );
};
