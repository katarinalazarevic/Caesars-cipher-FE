import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LabelAndInput from "src/components/input-form/input-form";
import DragDropFileUpload from "src/components/drag-drop/drag-drop";
import HeaderSection from "../../components/header-section/header-section";
import editIcon from "src/assets/icons/editIcon.svg";
import infoIcon from "src/assets/icons/infoIcon.svg";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";
import photoStudioPlaceHolder from "src/assets/icons/photoStudioPlaceHolder.svg";
import { useCompanyStore } from "src/store/company/useCompanyStore";
import PrimaryButton from "src/components/button/primary-button";
import { REGEX } from "src/constants/constants";
import i18n from "src/i18n";
import { CompanyInfoContainer, Content, DragDropFileUploadContainer, EditIcon, HeaderContainer, InputGroup, StyledInputDiv } from "./styled-company-information";

const CompanyInformation = () => {
  const { t } = useTranslation("addCompanyModal");
  const { company, isLoading, updateCompany } = useCompanyStore();
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading || !company) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  const initialValues = {
    name: company?.name || "",
    phone: company?.phone || "",
    address: company?.address || "",
    logo: company?.logo || photoStudioPlaceHolder,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t('shopNameRequired')).matches(REGEX.shopNameRegex, t('invalidShopName')),
    phone: Yup.string().required(t('phoneNumberRequired')).matches(REGEX.phoneNumberRegex, t('invalidPhone')),
    address: Yup.string().required(t('addressRequired')).matches(REGEX.addressRegex, t('invalidAddress'))
  });

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append("Name", values.name);
    formData.append("Phone", values.phone);
    formData.append("Address", values.address);
    if (values.logo instanceof File) {
      formData.append("Logo", values.logo);
    }
    await updateCompany(company.id, formData);
    setIsEditing(false);
  };

  return (
    <CompanyInfoContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, submitForm, validateForm }) => {
          useEffect(() => {
            validateForm();
          }, [i18n.language]);

          return (
            <Form>
              <HeaderContainer>
                <HeaderSection iconSrc={infoIcon} altText={t('title')} title={t("title")} />
                {isEditing ? (
                  <>
                    <PrimaryButton
                      onClick={() => setIsEditing(false)}
                      $bgColor="--cancel-bg-color"
                      $textColor="--cancel-text-color"
                      $borderColor="--cancel-border-color"
                      $hoverColor="--cancel-hover-color"
                      $width="10.5rem"
                      type="button"
                    >
                      {t("cancelButton")}
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={submitForm}
                      $bgColor="--login-button"
                      $textColor="--confirm-text-color"
                      $borderColor="--confirm-border-color"
                      $hoverColor="--confirm-primary-over"
                      $width="10.5rem"
                      type="button"
                    >
                      {t("submitButton")}
                    </PrimaryButton>
                  </>
                ) : (
                  <EditIcon
                    src={editIcon}
                    alt={t("modifyButton")}
                    onClick={() => setIsEditing(true)}
                  />
                )}
              </HeaderContainer>
              <Content>
              <StyledInputDiv $width="100%">
                  <LabelAndInput
                    labelText={t("shop")}
                    name="name"
                    disabled={!isEditing}
                  />
                </StyledInputDiv>
                <InputGroup>
                  <StyledInputDiv $width="50%">
                    <LabelAndInput
                      labelText={t("phoneNumber")}
                      name="phone"
                      disabled={!isEditing}
                    />
                  </StyledInputDiv>
                  <StyledInputDiv $width="50%">
                    <LabelAndInput
                      labelText={t("address")}
                      name="address"
                      disabled={!isEditing}
                    />
                  </StyledInputDiv>
                </InputGroup>
                <DragDropFileUploadContainer>
                  <DragDropFileUpload
                    labelText={t('logo')}
                    onFileUpload={(file) => setFieldValue("logo", file)}
                    initialImage={
                      company?.logo
                        ? `data:image/png;base64,${company.logo}`
                        : photoStudioPlaceHolder
                    }
                    disabled={!isEditing}
                  />
                </DragDropFileUploadContainer>
              </Content>
            </Form>
          );
        }}
      </Formik>
    </CompanyInfoContainer>
  );
};

export default CompanyInformation;