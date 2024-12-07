import { t } from "i18next";
import { ModalContent } from "src/components/modal-content/modal-content";
import { ModalHeader } from "src/components/modal-header/modal-header";
import {
  Overlay,
  ModalContainer
} from "../create-user-account-modal/create-user-account.styled-modal";
import { useTranslation } from "react-i18next";
import { useUserStore } from "src/store/user/useUserStore";

export const EditUserModal = () => {
  const store = useUserStore();
  const { t } = useTranslation("addUserModal");

  const closeModal = () => {
    store.closeEditModal();
  };

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalContainer>
        <ModalHeader text={t("headingEdit")} onClose={closeModal} />
        <ModalContent isEdit={true} onClose={closeModal} />
      </ModalContainer>
    </>
  );
};
