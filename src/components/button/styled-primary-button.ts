import styled from "styled-components";
import StyledButton, { StyledButtonProps } from "./styled-button";

const StyledPrimaryButton = styled(StyledButton)<StyledButtonProps>`
  font-weight: ${({ $fontWeight }) => $fontWeight || 600};
  line-height: ${({ $lineHeight }) => $lineHeight || "1.5rem"};
  font-size: ${({ $fontSize }) => $fontSize || "1rem"};
  padding: ${({ $padding }) => $padding || "0.625rem 1.125rem"};
  width: ${({ $width }) => $width || "12rem"};
  background-color: ${({ $bgColor }) => `var(${$bgColor})`};
  border: ${({ $borderColor }) =>
    $borderColor ? `1px solid var(${$borderColor})` : "none"};
  border-radius: 1.25rem;

  &:hover {
    background-color: ${({ $hoverColor }) =>
      $hoverColor ? `var(${$hoverColor})` : "inherit"};
  }
`;

export default StyledPrimaryButton;
