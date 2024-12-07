import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 0.688rem;
  background-color: var(--card-container-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.75rem;
  max-width: 100%;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const DeleteButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  @media (max-width: 769px) {
    width: 1.0rem;
    height: 1.0rem;
  }
`;