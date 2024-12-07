import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.125rem solid var(--input-border-color-hover);
  padding: 0.688rem 0.625rem;
  width: 20.563rem;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  font-size: 0.875rem;
  color: var(--input-form-label-text);
  width: 100%;
  &::placeholder {
    color: var(--login-forgot-password);
  }
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
