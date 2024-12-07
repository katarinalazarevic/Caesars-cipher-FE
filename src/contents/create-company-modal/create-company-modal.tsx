import React from "react";
import { ModalHeader } from "src/components/modal-header/modal-header";
import { useUserStore } from "src/store/user/useUserStore";
import { ModalContent } from "src/components/modal-content/modal-content";
import { useTranslation } from "react-i18next";
import { ModalContainer, Overlay } from "../create-user-account-modal/create-user-account.styled-modal";
import { CompanyModalContent } from "src/components/company-modal-content/company-modal-content";


interface CreateCompanyModalProps {
    onClose: () => void;
  }

export const CreateCompanyModal = ({ onClose }: CreateCompanyModalProps) => {
  
    const { t } = useTranslation('addCompanyModal')
  
    const closeModal = () => {
      onClose();
    };
  
    return (
      <>
        <Overlay onClick={closeModal} />
        <ModalContainer>
          <ModalHeader text={t("heading")} onClose={closeModal} />
          <CompanyModalContent onClose={closeModal} />
        </ModalContainer>
      </>
    );
  };