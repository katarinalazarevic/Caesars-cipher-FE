import React, { useEffect, useRef } from 'react';
import { ButtonGroup, ImageContainer, Message, ModalContent, ModalWrapper } from './confirmation-modal.styled';
import { Typography } from '@mui/material';
import PrimaryButton from '../button/primary-button';

interface ConfirmationModalProps {
  icon?: string;
  title: string;
  message?: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  icon,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  return (
    <>
      <ModalWrapper>
        <ModalContent >
          <ImageContainer />

          <Typography variant="h3">{title}</Typography>

          {message && <Message>{message}</Message>}

          <ButtonGroup>
            <PrimaryButton
              onClick={onCancel}
              $bgColor="--cancel-bg-color"
              $textColor="--cancel-text-color"
              $borderColor="--cancel-border-color"
              $hoverColor="--cancel-hover-color"
              $width="12.5rem"
            >
              {cancelText}
            </PrimaryButton>

            <PrimaryButton
              onClick={onConfirm}
              $bgColor="--confirm-bg-color"
              $textColor="--confirm-text-color"
              $borderColor="--confirm-border-color"
              $hoverColor="--confirm-hover-color"
              $width="12.5rem"
            >
              {confirmText}
            </PrimaryButton>
          </ButtonGroup>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default ConfirmationModal;
