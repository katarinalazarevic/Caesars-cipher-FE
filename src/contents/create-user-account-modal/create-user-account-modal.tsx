import React from "react";
import {
  ModalContainer,
  Overlay,
} from "./create-user-account.styled-modal";
import { ModalHeader } from "src/components/modal-header/modal-header";
import { useUserStore } from "src/store/user/useUserStore";
import { ModalContent } from "src/components/modal-content/modal-content";
import { useTranslation } from "react-i18next";

interface CreateUserAccountModalProps {
  onClose: () => void;
}

export const CreateUserAccountModal = ({ onClose }: CreateUserAccountModalProps) => {
  const store  = useUserStore();
  const { t } = useTranslation('addUserModal')

  const closeModal = () => {
    store.closeModal();
    onClose();
  };

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalContainer>
        <ModalHeader text={t("heading")} onClose={closeModal} />
        <ModalContent onClose={closeModal} />
      </ModalContainer>
    </>
  );
};