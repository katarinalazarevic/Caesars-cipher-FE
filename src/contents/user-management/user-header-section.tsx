import { useTranslation } from 'react-i18next';
import userIcon from 'src/assets/icons/user-icon.svg';
import HeaderSection from 'src/components/header-section/header-section';

const UserHeaderSection = () => {
  const { t } = useTranslation('userContent')
  return <HeaderSection iconSrc={userIcon} altText={t('heading')} title={t('heading')} />;
};

export default UserHeaderSection;
