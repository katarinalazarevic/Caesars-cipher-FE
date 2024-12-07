import { Formik, Form } from "formik";
import * as Yup from "yup";
import LabelAndInput from "../input-form/input-form";
import { REGEX } from "src/constants/constants";
import { ButtonGroup } from "../confirmation-modal/confirmation-modal.styled";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../button/primary-button";
import { useState } from "react";
import { LabelAndInputDiv, ModalContentStyled } from "./company-modal-content.styled";
import DragDropFileUpload from "../drag-drop/drag-drop";
import { useCompanyStore } from "src/store/company/useCompanyStore";
import { Company } from "src/models/Company";

interface ModalContentProps {
  company?: Company;
  isHidden?: boolean;
  onClose: () => void;
}

export const CompanyModalContent = ({ company, isHidden = false, onClose }: ModalContentProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { t } = useTranslation('addCompanyModal');
  const createCompany = useCompanyStore((state) => state.createCompany);
  const updateCompany = useCompanyStore((state) => state.updateCompany);

  const validationSchema = Yup.object().shape({
    storeName: Yup.string().required(t('shopNameRequired')).matches(REGEX.shopNameRegex, t('invalidShopName')),
    phoneNumber: Yup.string().required(t('phoneNumberRequired')).matches(REGEX.phoneNumberRegex, t('invalidPhone')),
    address: Yup.string().required(t('addressRequired')).matches(REGEX.addressRegex, t('invalidAddress')),
  });

  const handleSubmit = async (values: any, { setSubmitting }: any, onClose: () => void) => {
    const formData = new FormData();
    formData.append('Name', values.storeName);
    formData.append('Phone', values.phoneNumber);
    formData.append('Address', values.address);
    if (selectedFile) {
      formData.append('Logo', selectedFile);
    }

    if (company) {
      await updateCompany(company.id, formData);
    } else {
      await createCompany(formData);
    }
    onClose();
    setSubmitting(false);
  };

  const initialValues = {
    storeName: company?.name || "",
    phoneNumber: company?.phone || "",
    address: company?.address || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      validateOnChange
      validateOnBlur
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, { setSubmitting }, onClose)}
    >
      {({ isSubmitting }) => (
        <Form>
          <ModalContentStyled>
            <LabelAndInputDiv>
              <LabelAndInput
                labelText={t('shop')}
                placeholder={t('enterShopName')}
                name="storeName"
              />
            </LabelAndInputDiv>
            <LabelAndInputDiv>
              <LabelAndInput
                labelText={t('phoneNumber')}
                placeholder={t('enterPhoneNumber')}
                name="phoneNumber"
              />
            </LabelAndInputDiv>
            <LabelAndInputDiv>
              <LabelAndInput
                labelText={t('address')}
                placeholder={t('enterAddress')}
                name="address"
              />
            </LabelAndInputDiv>
            <DragDropFileUpload
              labelText={t('logo')}
              onFileUpload={(file: File) => setSelectedFile(file)}
              initialImage={company?.logo ? `data:image/png;base64,${company.logo}` : undefined}
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
                {t('cancelButton')}
              </PrimaryButton>
              <PrimaryButton
                type="submit"
                disabled={isSubmitting}
                $bgColor="--login-button"
                $textColor="--confirm-text-color"
                $borderColor="--confirm-border-color"
                $hoverColor="--confirm-primary-over"
                $width="12.5rem"
              >
                {t('submitButton')}
              </PrimaryButton>
            </ButtonGroup>
          </ModalContentStyled>
        </Form>
      )}
    </Formik>
  );
};