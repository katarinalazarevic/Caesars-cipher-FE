import styled from "styled-components";

export const AggregatedDataContainer = styled.div`
  display: flex;
  border-radius: 2rem;
  background: var(--text-color-gray);
  box-shadow: 0 0.125rem 1rem 0 rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 30%;
`;

export const AggregatedDataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding:1rem 2rem 0rem 2rem;
`;

export const AggregatedDataDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
