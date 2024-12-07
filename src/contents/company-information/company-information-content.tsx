import { AdminDashboardContainer, AdminDashboardTextContainer, AdminPageWrapper, DashboardContainer } from 'src/contents/admin-landing-page/admin-landing-page-content.styled';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CompanyInformation from 'src/components/company-information-details/company-information';
import { useCompanyStore } from 'src/store/company/useCompanyStore';

const CompanyInformationContent = () => {
  const { t }= useTranslation('companyPage');
  const {company} = useCompanyStore();
  return (
    <AdminPageWrapper>
      <AdminDashboardContainer>
        <AdminDashboardTextContainer>
          <Typography variant="body1">{t('body1')}</Typography>
          <Typography variant="h1">{company?.name}</Typography>
        </AdminDashboardTextContainer>
      </AdminDashboardContainer>
      <DashboardContainer>
        <CompanyInformation />
      </DashboardContainer>
    </AdminPageWrapper>
  );
};

export default CompanyInformationContent;