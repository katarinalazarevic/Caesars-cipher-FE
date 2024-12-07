import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

export const PrimaryPaginationStyle = styled(Pagination)`
  && .Mui-selected {
    background-color: var(--text-color-yellow3);
    color: var(--input-border-color-hover);
  }
  && .MuiPaginationItem-root {
    font-size: 0.75rem;
    border-radius: 0.25rem;
  }
  display: flex;
  justify-content: flex-end;
  margin-top: 1.25rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
  }

  @media (max-width: 400px) {
    && .MuiPaginationItem-root {
      font-size: 0.5rem;
    }
    margin-top: 0.75rem;
    justify-content: center;
  }
`;