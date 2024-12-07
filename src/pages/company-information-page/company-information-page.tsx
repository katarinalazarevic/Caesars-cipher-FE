import MainLayout from 'src/layouts/main-layout';
import CompanyInformationContent from 'src/contents/company-information/company-information-content';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCompanyStore } from 'src/store/company/useCompanyStore';

export const CompanyInformationPage = () => {
  const { id } = useParams<{ id: string }>();
  const { fetchCompanyById } = useCompanyStore();

  useEffect(() => {
    fetchCompanyById(Number(id));
  }, [id, fetchCompanyById]);

  return (
    <MainLayout backgroundColor='var(--beige-bg-color)'>
      <CompanyInformationContent />
    </MainLayout>
  );
};