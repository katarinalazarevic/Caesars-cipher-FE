import styled from "styled-components";

export const AdminPageWrapper = styled("div")`
  background-color: var(--beige-bg-color);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 7.5rem;
`;

export const AdminDashboardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  gap: 2.25rem;
`;

export const AdminDashboardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardLeftContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

export const DashboardRightContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

export const DashboardContainer = styled.div`
  display: flex;
  height:35rem ;
  margin-top: 34px;
  padding: 0 2.5rem;
  width: calc(100% - 5rem);
  align-items: center;
  gap: 24px;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: baseline;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    align-items: baseline;
    width: calc(100% - 5rem);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: calc(100% - 5rem);
  }
`;
