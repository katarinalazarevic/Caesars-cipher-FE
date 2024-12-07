import React from 'react';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { ITestableProps } from 'src/types/testing';
import { LoginPageContent } from 'src/contents/login-page/login-page';
import MainLayout from 'src/layouts/main-layout';

const StyledPaper = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  width: '24rem',
  backgroundColor: theme.palette.background,
  borderRadius: theme.shape.borderRadius,
}));

export const LoginPage = (props: LoginPageProps) => {
  const { t } = useTranslation();

  return (
    <MainLayout backgroundColor='var(--login-pagecontainer-background)'>
      <LoginPageContent />
    </MainLayout>
  );
}

export interface LoginPageProps extends ITestableProps {
}

export interface LoginPageFormInput {
  username: string;
}
