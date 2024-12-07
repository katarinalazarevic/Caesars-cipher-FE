import { useTranslation } from "react-i18next";
import photoIcon from "src/assets/icons/photoIcon.svg";
import HeaderSection from "src/components/header-section/header-section";

const CompanyHeaderSection = () => {
  const { t } = useTranslation("companyContent");
  
  return (
    <HeaderSection
      iconSrc={photoIcon}
      altText={t("heading")}
      title={t("heading")}
    />
  );
};

export default CompanyHeaderSection;
