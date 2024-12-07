import { ModalHeader } from "src/components/modal-header/modal-header";
import { useTranslation } from "react-i18next";
import { ModalContainer, Overlay } from "../create-user-account-modal/create-user-account.styled-modal";
import { CompanyModalContent } from "src/components/company-modal-content/company-modal-content";
import { Company } from "src/models/Company";

interface EditCompanyModalProps {
  company: Company;
  onClose: () => void;
}

export const EditCompanyModal = ({ company, onClose }: EditCompanyModalProps) => {
  const { t } = useTranslation('addCompanyModal');

  const closeModal = () => {
    onClose();
  };

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalContainer>
        <ModalHeader text={t("heading")} onClose={closeModal} />
        <CompanyModalContent company={company} onClose={closeModal} />
      </ModalContainer>
    </>
  );
};