import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormContainer, LabelAndImgDiv, LoginButton } from "../login-page/login-page.styled";
import LabelAndInput from "src/components/input-form/input-form";
import { REGEX } from "src/constants/constants";
import { useLocation } from "react-router-dom";
import { createNewPassword } from "src/services/authService";
import { useTranslation } from "react-i18next";
import i18n from "src/i18n";
import { PasswordToggleIcon } from "./reset-password.styled";

export const PasswordResetContent: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const location = useLocation();
  const { t } = useTranslation("resetPassword");

  const validationSchema = Yup.object().shape({
    passwordReset: Yup.string()
      .required(t("passwordRequired"))
      .matches(REGEX.passwordMinLength, t("passwordTooShort"))
      .matches(REGEX.passwordUppercase, t("passwordMustContainUppercase"))
      .matches(REGEX.passwordLowercase, t("passwordMustContainLowercase"))
      .matches(REGEX.passwordDigit, t("passwordMustContainDigit"))
      .matches(REGEX.passwordSpecialChar, t("passwordMustContainSpecialChar")),
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      console.warn("No token found in the URL");
    }
  }, [location.search]);

  const handlePasswordResetSubmit = async (values: any, { setSubmitting }: any) => {
    await createNewPassword(token, values.passwordReset);
    setSubmitting(false);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <FormContainer>
      <Formik
        initialValues={{ passwordReset: "" }}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        onSubmit={handlePasswordResetSubmit}
      >
        {({ isSubmitting, validateForm }) => {
          useEffect(() => {
            validateForm();
          }, [i18n.language]);

          return (
            <Form>
              <LabelAndImgDiv>
                <LabelAndInput
                  labelText={t("newPassword")}
                  placeholder={t("newPassword")}
                  name="passwordReset"
                  type={showPassword ? "text" : "password"}
                />

                <PasswordToggleIcon
                  src={showPassword ? '/showPassword.svg' : '/hidePassword.svg'}
                  alt={t("togglePasswordVisibility")}
                  onClick={handleTogglePassword}
                />

              </LabelAndImgDiv>
              <LoginButton type="submit" disabled={isSubmitting}>
                {t("resetButton")}
              </LoginButton>
            </Form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};