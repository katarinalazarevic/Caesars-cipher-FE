import { Formik, Form } from "formik";
import * as Yup from "yup";
import DropDownForm from "../role-drop-down-form/role-drop-down-form";
import LabelAndInput from "../input-form/input-form";
import { ModalContentStyled, LabelAndInputDiv } from "./modal-content.styled";
import { useUserStore } from "src/store/user/useUserStore";
import { REGEX } from "src/constants/constants";
import { ButtonGroup } from "../confirmation-modal/confirmation-modal.styled";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../button/primary-button";
import { useEffect } from "react";
import i18n from "src/i18n";

interface ModalContentProps {
  isEdit?: boolean;
  onClose: () => void;
}

export const ModalContent = ({ isEdit = false, onClose }: ModalContentProps) => {
  const { t } = useTranslation('addUserModal')
  const store = useUserStore();

  const handleSubmit = async (values: any, { setSubmitting }: any, store: any, onClose: () => void) => {
    if(isEdit)
    {
      await store.modifyUser(store.currentUser?.id, values.firstName, values.lastName, store.currentUser?.email, store.currentUser?.roleId);
      store.closeEditModal();
    } else {
      await store.createUser(values.firstName, values.lastName, values.email, values.roleId);
      store.closeModal();
    }
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('firstNameRequired')).matches(REGEX.firstNameRegex, t('invalidFirstName')),
    lastName: Yup.string().required(t('lastNameRequired')).matches(REGEX.lastNameRegex, t('invalidLastName')),
    email: Yup.string().required(t('emailRequired')).matches(REGEX.emailRegex, t('invalidEmail')),
    roleId: Yup.number().min(1, t('roleRequired')).required(t('roleRequired')),
  });

  const initialValues = isEdit &&store.currentUser
    ? {
        id: store.currentUser.id,
        firstName: store.currentUser.firstName,
        lastName: store.currentUser.lastName,
        email: store.currentUser.email,
        roleId: store.currentUser.roleId,
      }
    : {
        firstName: "",
        lastName: "",
        email: "",
        roleId: 0,
      };

  return (
    <Formik
    initialValues={initialValues}
    enableReinitialize
    validationSchema={validationSchema}
    validateOnChange
    validateOnBlur
    onSubmit={(values, { setSubmitting }) => handleSubmit(values, { setSubmitting }, store, onClose)}
  >
    {({ isSubmitting, validateForm , dirty, isValid}) => {

      useEffect(() => {
        validateForm();
      }, [i18n.language]);
      
      const isSubmitDisabled = isEdit ? (!dirty || !isValid) : isSubmitting

      return (
        <Form>
          <ModalContentStyled>
            <LabelAndInputDiv>
              <LabelAndInput
                labelText={t("name")}
                placeholder={t("namePlaceHolder")}
                name="firstName"
              />
            </LabelAndInputDiv>
            <LabelAndInputDiv>
              <LabelAndInput
                labelText={t("lastName")}
                placeholder={t("lastNamePlaceHolder")}
                name="lastName"
              />
            </LabelAndInputDiv>
            <LabelAndInputDiv>
              <LabelAndInput
                labelText={t("email")}
                placeholder={t("emailPlaceHolder")}
                name="email"
                disabled={isEdit}
              />
            </LabelAndInputDiv>

            <DropDownForm
              labelText={t("role")}
              placeholder={t("rolePlaceHolder")}
              name="roleId"
              disabled={isEdit}
            />

            <ButtonGroup>
              <PrimaryButton
                onClick={onClose}
                $bgColor="--cancel-bg-color"
                $textColor="--cancel-text-color"
                $borderColor="--cancel-border-color"
                $hoverColor="--cancel-hover-color"
                $width="12.5rem"
              >
                {t("cancelButton")}
              </PrimaryButton>
              <PrimaryButton
                type="submit"
                disabled={isSubmitDisabled}
                $bgColor="--login-button"
                $textColor="--confirm-text-color"
                $borderColor="--confirm-border-color"
                $hoverColor="--confirm-primary-over"
                $width="12.5rem"
              >
                {t("submitButton")}
              </PrimaryButton>
            </ButtonGroup>
          </ModalContentStyled>
        </Form>
      );
    }}
  </Formik>
  );
};