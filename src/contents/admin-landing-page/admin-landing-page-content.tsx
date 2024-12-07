import { Typography } from "@mui/material";
import {
  AdminDashboardContainer,
  AdminDashboardTextContainer,
  AdminPageWrapper,
  DashboardContainer,
  DashboardLeftContainer,
  DashboardRightContainer,
} from "./admin-landing-page-content.styled";
import CompanyList from "../company-management/company-list";
import UserList from "../user-management/user-list";
import { useTranslation } from "react-i18next";
import { AggregatedData } from "src/contents/aggregated-data-admin-page/aggregated-data";

export const AdminLandingPageContent = () => {
  const { t }= useTranslation('adminPage');
  return (
    <AdminPageWrapper>
      <AdminDashboardContainer>
        <AdminDashboardTextContainer>
          <Typography variant="body1">Super Admin</Typography>
          <Typography variant="h1">{t("heading")}</Typography>
        </AdminDashboardTextContainer>
      </AdminDashboardContainer>
      <DashboardContainer>
        <DashboardLeftContainer>
          <CompanyList />
          <AggregatedData />
        </DashboardLeftContainer>
        <DashboardRightContainer>
          <UserList />
        </DashboardRightContainer>
      </DashboardContainer>
    </AdminPageWrapper>
  );
};
