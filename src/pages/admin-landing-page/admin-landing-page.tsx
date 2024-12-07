import React from 'react'
import MainLayout from 'src/layouts/main-layout'
import { AdminLandingPageContent } from 'src/contents/admin-landing-page/admin-landing-page-content'

export const AdminLandingPage = () => {
  return (
    <MainLayout backgroundColor='var(--beige-bg-color)'>
      <AdminLandingPageContent />
    </MainLayout>
  );
}
