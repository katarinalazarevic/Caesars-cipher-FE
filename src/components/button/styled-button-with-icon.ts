import styled from "styled-components";
import StyledButton, { StyledButtonProps } from "./styled-button";

export const StyledButtonWithIcon = styled(StyledButton)<StyledButtonProps>`
  display: flex;
  align-items: center;
  text-align: left;
  width: auto;
  height: auto;
  cursor: pointer;

  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor || 'initial'};
  }

  @media (max-width: 991px) {
    padding: ${({ $padding }) => $padding || '0.355rem 0.71rem'};
  }
`;