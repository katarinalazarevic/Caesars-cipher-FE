import styled from "styled-components";
import arrRight from "src/assets/icons/arrow-right.svg";
import { useTranslation } from "react-i18next";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ArrowLeftIcon = () => {
  const { t } = useTranslation("userContent");

  return (
    <IconContainer>
      <span>{t("nextPage")}</span>
      <img src={arrRight} alt="arrow" />
    </IconContainer>
  );
};

export default ArrowLeftIcon;
