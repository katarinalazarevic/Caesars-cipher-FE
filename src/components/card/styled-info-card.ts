import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const Avatar = styled.img`
  width: 1.688rem;
  height: 1.688rem;
  border-radius: 50%;
`;