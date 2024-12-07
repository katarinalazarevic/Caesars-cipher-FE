import styled from "styled-components";

export const CompanyManagementContainer = styled.div`
  border-radius: 2rem;
  background: var(--text-color-gray);
  box-shadow: 0 0.125rem 1rem 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
  height: 70%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;

export const CompanyListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 2.125rem;
`;