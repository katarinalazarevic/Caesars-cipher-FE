import styled from "styled-components";

export const WrapperSelect = styled.div`
  margin-top: 10px;
  height: 6.688rem;
  margin-bottom: 0.5rem;
`;

export const SelectComponent = styled.select<{ $isselected?: boolean }>`
  width: 25.75rem;
  padding: 1rem 1.6rem;
  font-size: 1rem;
  height: 3.6rem;
  border-radius: 4px;
  border: 0.0625rem solid var(--input-border-color);
  color: ${(props) => props.$isselected === true ? "black" : "var(--placeholder-color)"};
  background-image: url(${(props) => props.$isselected === true ? "/blackArrow.svg" : "/down-arrow.svg"});
  margin-top: 6px;
  &:hover {
    border: 0.125rem solid var(--input-border-color-hover) !important;
  }
  &:focus {
    border: 0.125rem solid black ;
    color: black;
  }
  border-radius: 1.25rem;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 1.5rem top 50%;
  background-size: 0.65rem auto;
  font-family: 'Poppins', sans-serif;
  &:disabled {
    color: var(--cancel-edit-text);
    background-color: var(--cancel-edit-input);
    opacity: 1;
  }
`;

export const OptionComponent = styled.option`
  font-size: 16px;
  border-radius: 15px;
`;
