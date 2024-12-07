import styled from "styled-components";
import { PrimaryFooterProps } from "./primary-footer";

export interface StyledTextDiv {
  $width?: string;
  $height?: string;
}

export const TextContainer = styled.div`
  display: flex;
  gap: 0.313rem;
`;
export const FooterWrapper = styled.footer<PrimaryFooterProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  height: 3.1rem;
`;

export const FooterContentwrapper = styled.div`
  height: 100%;
  width: calc(100% - 30px);
  margin-left: 15px;
  margin-right: 15px;
  border-top: 1px solid var(--accent-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
`;

export const TextWrapper = styled.div<StyledTextDiv>`
  height: ${({ $height }) => $height || "auto"};
  width: ${({ $width }) => $width || "auto"};
`;

export const Logo = styled.div`
  background-image: url("/tremLogo.svg");
  height: 1.188rem;
  width: 1.938rem;
  background-repeat: no-repeat;
`;
