import { ControlsWrapper } from './styled-company-list-controls';
import plusIcon from 'src/assets/icons/plus-icon.svg';
import CompanySearchBar from '../company-search-bar';
import { useCompanyStore } from 'src/store/company/useCompanyStore';
import { useTranslation } from 'react-i18next';
import ButtonWithIcon from 'src/components/button/button-with-icon';
import { CreateCompanyModal } from 'src/contents/create-company-modal/create-company-modal';

const CompanyListControls = () => {
  const { searchCompany, openModal, isCompanyModalOpen, closeModal } = useCompanyStore();
  const { t } = useTranslation("companyContent");

  const handleSearch = (query: string) => {
    searchCompany(query);
  };

  return (
    <ControlsWrapper>
      <CompanySearchBar onSearch={handleSearch}/>
      <ButtonWithIcon
        icon={plusIcon}
        altText={t('addCompanyButton')}
        $bgColor="--login-button"
        $textColor="--text-color-gray"
        $hoverColor="--login-button-hover"
        onClick={openModal}
      >
        {t('addCompanyButton')}
      </ButtonWithIcon>
      {isCompanyModalOpen && <CreateCompanyModal onClose={closeModal} />}
    </ControlsWrapper>
  );
};

export default CompanyListControls;