import { ModalBottomSyled } from "./modal-bottom.styled";
import { ButtonGroup } from "../confirmation-modal/confirmation-modal.styled";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../button/primary-button";

interface ModalBottomProps {
  onCancel: () => void;
  onSubmit: (event: React.FormEvent) => void | Promise<void>;
}

export const ModalBottom = ({onCancel,onSubmit}: ModalBottomProps) => {
  const { t } = useTranslation('addUserModal')

  return (
    <ModalBottomSyled>
      <ButtonGroup>
      <PrimaryButton
          onClick={onCancel}
          $bgColor="--text-color-gray"
          $textColor="--cancel-text-color"
          $borderColor="--input-border-color"
          $hoverColor="--cancel-hover-color"
          $width="12.5rem"
        >
          {t('cancelButton')}
        </PrimaryButton>

        <PrimaryButton
          onClick={onSubmit}
          $bgColor="--login-button"
          $textColor="--confirm-text-color"
          $borderColor="--login-button"
          $hoverColor="--confirm-primary-over"
          $width="12.5rem"
        >
          {t('submitButton')}
        </PrimaryButton>
      </ButtonGroup>
    </ModalBottomSyled>
  );
};
