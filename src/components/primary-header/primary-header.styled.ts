import { Box } from "@mui/material";
import styled from "styled-components";

export const HeaderWrapper = styled(Box)`
  height: 2.25rem;
  position: sticky;
  top: -0.0625rem;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: var(--header-bg-color);
  box-shadow: 0px 0.125rem 1rem 0px rgba(0, 0, 0, 0.05);
`;

export const HeaderContainerWrapper = styled(Box)`
  position: absolute;
  top: 0.9375rem;
  bottom: 0;
  left: 2.5rem;
  display: flex;
  align-items: center;
  height: 2.25rem;
  width: 500px;
`;

export const HeaderLogo = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: var(--logo-color);
  border-radius: 50%;
  margin-right: 0.625rem;
`;

export const HeaderText = styled.div`
  opacity: 1;
  font-size: var(--font-24-size);
  font-weight: 400;
  line-height: 2.25rem;
  text-align: left;
`;

export const LanguageSelectorWrapper= styled.div`
background-color:"red";
width:auto;
height:auto; 
margin-right: 0.2rem;
`

export const StyledSelect = styled.select`
  border:none;
  background: "transparent";
  color: "black";
  font-size: 1rem;

`;

export const OptionStyled = styled.option`
  border: none;
  font-size: 1rem;
`;

export const AvatarDiv = styled.div`
  margin-right: "35px";
`


export const LogoutContainer = styled.div`
  width: 118px;
  height: 47px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    cursor: pointer;
  }
`;
export const LabelWithPointer = styled.label`
  margin-right: 10px;
  cursor: pointer;
`;


export const LogoutIcon = styled.img`
  width: 20px;
  height: 20px;
`;