import styled from "styled-components";

export interface StyledButtonProps extends React.PropsWithChildren<{}> {
  $bgColor: string;
  $textColor: string;
  $borderColor?: string;
  $hoverColor?: string;
  $width?: string;
  $fontWeight?: number;
  $fontSize?: string;
  $padding?: string;
  $lineHeight?: string;
  $letterSpacing?: string;
  onClick?: (event: React.FormEvent) => void | Promise<void>;
}

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  border-radius: 0.888rem;
  font-weight: ${({ $fontWeight }) => $fontWeight || 600};
  font-size: ${({ $fontSize }) => $fontSize || "0.75rem"};
  padding: ${({ $padding }) => $padding || "0.342rem 1.367rem"};
  line-height: ${({ $lineHeight }) => $lineHeight || "1.125rem"};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || "-0.011em"};
  transition: background-color 0.3s;
  background-color: ${({ $bgColor }) => `var(${$bgColor})`};
  color: ${({ $textColor }) => `var(${$textColor})`};
  border: ${({ $borderColor }) =>
    $borderColor ? `1px solid var(${$borderColor})` : "none"};
  width: ${({ $width }) => $width || "auto"};
  height: auto;

  &:hover {
    background-color: ${({ $hoverColor }) =>
      $hoverColor ? `var(${$hoverColor})` : "none"};
  }
`;

export default StyledButton;
