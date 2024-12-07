import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormContainer, LoginButton } from "../login-page/login-page.styled";
import LabelAndInput from "src/components/input-form/input-form";
import { REGEX } from "src/constants/constants";
import { sendEmailForPasswordReset } from "src/services/authService";
import { useTranslation } from "react-i18next";
import i18n from "src/i18n";

const handleResetPasswordSubmit = async (values: any, { setSubmitting }: any) => {
  await sendEmailForPasswordReset(values.email);
  setSubmitting(false);
};

export const ResetPasswordForm: React.FC = () => {
  const { t } = useTranslation('resetPasswordEmail');

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(t('emailRequired')).matches(REGEX.emailRegex, t('invalidEmail')),
  });
  return (
    <FormContainer>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleResetPasswordSubmit}
      >
        {({ isSubmitting, validateForm }) => {
          useEffect(() => {
            validateForm();
          }, [i18n.language]);

          return (
            <Form>
              <LabelAndInput
                labelText={t("emailLabel")}
                placeholder={t("emailPlaceholder")}
                name="email"
              />
              <LoginButton type="submit" disabled={isSubmitting}>{t("resetButton")}</LoginButton>
            </Form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};