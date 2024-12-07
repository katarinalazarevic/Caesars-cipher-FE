import LabelAndInput from "src/components/input-form/input-form"
import { MainPageWrapper, WrapperInput } from "./main-page-content.styled"
import { useTranslation } from "react-i18next";
import PrimaryButton from "src/components/button/primary-button";

export const MainPageContent = () => {
    const { t } = useTranslation("main");

    const handleOnClick = () => {

    }

    return (
      <MainPageWrapper>
        <WrapperInput>
          <LabelAndInput
            labelText={t("text")}
            placeholder={t("textPlaceHolder")}
          />
          <div style={{display:"flex",justifyContent:"end"}}>
            <PrimaryButton
              onClick={handleOnClick}
              $bgColor="--button"
              $textColor="--input-form-label-text"
              $borderColor="--input-form-label-text"
              $hoverColor="--cancel-hover-color"
              $width="5.5rem"
            >{t("submit")}</PrimaryButton>
          </div>
        </WrapperInput>
      </MainPageWrapper>
    );
  }
  