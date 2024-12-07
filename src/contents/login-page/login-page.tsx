import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LabelAndInput from "src/components/input-form/input-form";
import {
  Card,
  Container,
  ForgotPasswordText,
  FormContainer,
  ImageContainer,
  ImageLogin,
  LabelAndImgDiv,
  LoginButton,
  PasswordComponent,
  PasswordToggleIcon,
  StyledForm,
  Title,
} from "./login-page.styled";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'src/store/user/useAuthStore';
import { Roles } from 'src/enums/Roles';
import { ROUTES } from "src/constants/route-constants";
import { REGEX } from "src/constants/constants";
import { useTranslation } from "react-i18next";
import i18n from "src/i18n";

export const LoginPageContent: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const { t } = useTranslation('login');

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(t('emailRequired')).matches(REGEX.emailRegex, t('invalidEmail')),
    password: Yup.string()
      .required(t('passwordRequired'))
      .matches(REGEX.passwordMinLength, t('passwordTooShort'))
      .matches(REGEX.passwordUppercase, t('passwordMustContainUppercase'))
      .matches(REGEX.passwordLowercase, t('passwordMustContainLowercase'))
      .matches(REGEX.passwordDigit, t('passwordMustContainDigit'))
      .matches(REGEX.passwordSpecialChar, t('passwordMustContainSpecialChar')),
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    navigate(ROUTES.RESET_PASSWORD_EMAIL);
  };

  const handleLoginSubmit = async (values: any, { setSubmitting }: any) => {
    await authStore.login(values.email, values.password);

    if (authStore.hasRole(Roles.SUPERADMIN)) {
      navigate(ROUTES.ADMIN_LANDING_PAGE);
    } else {
      navigate(ROUTES.ADMIN_LANDING_PAGE);
    }
    setSubmitting(false);
  };

  return (
    <Container>
      <Card>
        <ImageContainer>
          <ImageLogin src={'/photoLogin.png'}></ImageLogin>
        </ImageContainer>
        <FormContainer>
          <Title>{t("title")}</Title>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            validateOnChange
            validateOnBlur
            onSubmit={handleLoginSubmit}
          >
            {({ isSubmitting, validateForm }) => {
              useEffect(() => {
                validateForm();
              }, [i18n.language]);

              return (

                <StyledForm>
                  <LabelAndInput
                    labelText="Email *"
                    placeholder={t("emailPlaceHolder")}
                    name="email"
                  />
                  <PasswordComponent>
                    <LabelAndImgDiv>
                      <LabelAndInput
                        labelText={t("passwordLabel")}
                        type={showPassword ? 'text' : 'password'}
                        placeholder={t("passwordPlaceholder")}
                        name="password"
                      />
                      <PasswordToggleIcon
                        src={showPassword ? '/showPassword.svg' : '/hidePassword.svg'}
                        alt={t("togglePasswordVisibility")}
                        onClick={handleTogglePassword}
                      />
                    </LabelAndImgDiv>
                    <ForgotPasswordText onClick={handleForgotPasswordClick}>{t("forgotPassword")}</ForgotPasswordText>
                  </PasswordComponent>
                  <LoginButton type="submit" disabled={isSubmitting}>{t('loginButton')}</LoginButton>
                </StyledForm>
              );
            }}
          </Formik>
        </FormContainer>
      </Card>
    </Container>
  );
};