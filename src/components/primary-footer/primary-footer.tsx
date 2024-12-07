import { Typography } from "@mui/material"
import { TextContainer, FooterWrapper, TextWrapper, Logo, FooterContentwrapper } from "./primary-footer.styled"
import { useTranslation } from "react-i18next";

export interface PrimaryFooterProps {
  $backgroundColor: string;
}

export const PrimaryFooter = ({$backgroundColor}:PrimaryFooterProps) => {
  const { t } = useTranslation("adminPage")
  return (
    <FooterWrapper $backgroundColor={$backgroundColor}>
      <FooterContentwrapper>
        <TextContainer>
          <TextWrapper $width="5.5rem">
            <Typography variant="h6">Photo Studio</Typography>
          </TextWrapper>
          <TextWrapper $width="4.5rem">
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Copyright
            </Typography>
          </TextWrapper>
          <TextWrapper>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              ©
            </Typography>
          </TextWrapper>
          <TextWrapper $width="2.18rem">
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              2024
            </Typography>
          </TextWrapper>
          <Logo></Logo>
          <TextWrapper $width="8.5rem">
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Tremium Software.
            </Typography>
          </TextWrapper>
          <TextWrapper>
            <Typography variant="h6">{t("footer")}</Typography>
          </TextWrapper>
        </TextContainer>
      </FooterContentwrapper>
    </FooterWrapper>
  );
}
