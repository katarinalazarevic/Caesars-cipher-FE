import CompanyPagination from "./company-pagination";
import CompanyCard from "./company-card";
import { CompanyListWrapper, CompanyManagementContainer } from "./styled-company-list";
import { useEffect } from "react";
import CompanyHeaderSection from "./company-header-section";
import CompanyListControls from "./company-list-controls/company-list-controls";
import { useCompanyStore } from "src/store/company/useCompanyStore";
import { Company } from "src/models/Company";
import { useTranslation } from "react-i18next";
import { NoContentMessage } from "src/components/no-results-message/styled-no-content";
import ConfirmationModal from "src/components/confirmation-modal/confirmation-modal";

const CompanyList = () => {
  const { companies, page, pageSize, totalCount, fetchCompanies, searchQuery, 
    isDeleteModalOpen, deleteCompany, closeDeleteModal
   } = useCompanyStore();
  const { t } = useTranslation('companyContent');

  const onConfirmDelete = async () => {
    await deleteCompany();
  }
 
  useEffect(() => {
    fetchCompanies(page, pageSize, totalCount, searchQuery);
  }, [page, searchQuery, fetchCompanies]);

  return (
    <CompanyManagementContainer>
      <CompanyHeaderSection />
      <CompanyListControls />
      <CompanyListWrapper>
        {companies.length > 0 ? (
          companies.map((company: Company) => (
            <CompanyCard key={company.name} company={company} />
          ))
        ) : (
          <NoContentMessage>{t("noSearchContent")}</NoContentMessage>
        )}
      </CompanyListWrapper>

      {isDeleteModalOpen && (
        <ConfirmationModal
          title={t('deleteTitle')}
          message={t('deleteMessage')}
          confirmText={t('deleteConfirm')}
          cancelText={t('deleteCancel')}
          onConfirm={onConfirmDelete}
          onCancel={closeDeleteModal}
        />
      )}

      {companies.length > 0 && (
        <CompanyPagination
          currentPage={page}
          totalPages={Math.ceil(totalCount / pageSize)}
          onPageChange={(newPage) =>
            fetchCompanies(newPage, pageSize, totalCount, searchQuery)
          }
        />
      )}
    </CompanyManagementContainer>
  );
};

export default CompanyList;