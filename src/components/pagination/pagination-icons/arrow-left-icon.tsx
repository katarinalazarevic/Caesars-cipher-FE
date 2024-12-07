import styled from "styled-components";
import arrLeft from "src/assets/icons/arrow-left.svg";
import { useTranslation } from "react-i18next";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ArrowLeftIcon = () => {
  const { t } = useTranslation('userContent'); 

  return (
    <IconContainer>
      <img src={arrLeft} alt="arrow"/>
      <span>{t('previousPage')}</span>
    </IconContainer>
  );
};
export default ArrowLeftIcon;