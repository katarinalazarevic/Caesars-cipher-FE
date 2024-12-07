import { useEffect } from "react";
import {
  AvatarDiv,
  HeaderContainerWrapper,
  HeaderLogo,
  HeaderText,
  HeaderWrapper,
  LabelWithPointer,
  LanguageSelectorWrapper,
  LogoutContainer,
  LogoutIcon,
  OptionStyled,
  StyledSelect,
} from "./primary-header.styled";
import i18n from "src/i18n";
import { useLanguageStore } from "src/store/user/useLanguageStore";
import { Avatar, Box, IconButton, Popover, Typography } from "@mui/material";
import { useAuthStore } from "src/store/user/useAuthStore";
import React from "react";
import { useTranslation } from "react-i18next";
import { toastMessages } from "src/constants/route-constants";
import { useToastStore } from "src/store/toast/useToastStore";
import { toastSuccess } from "src/services/apiService";

const languageOptions: string[] = ["sr", "en"];

export const PrimaryHeader = () => {

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const { t } = useTranslation('logout');

  const handleAvatarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  const { logout, isLoggedIn, firstName, lastName ,initials } = useAuthStore();

  const store = useLanguageStore()

  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    i18n.changeLanguage(store.selectedLanguage);
  }, [store.selectedLanguage]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    store.setSelectedLanguage(event.target.value);
  };
  const handleLogout = () => {
    setOpen(false)
    setAnchorEl(null)
    logout();
    
    toastSuccess(toastMessages['logout']['post'])

  };

  return (
    <HeaderWrapper>
      <HeaderContainerWrapper>
        <HeaderText>Cezarov šifrator</HeaderText>
      </HeaderContainerWrapper>
      <LanguageSelectorWrapper>
        <StyledSelect
          value={store.selectedLanguage}
          onChange={handleLanguageChange}
        >
          {languageOptions.map((option) => (
            <OptionStyled key={option} value={option}>
              {option}
            </OptionStyled>
          ))}
        </StyledSelect>
      </LanguageSelectorWrapper>

      {isLoggedIn && <AvatarDiv>

        <IconButton onClick={handleAvatarClick} sx={{marginRight:"0.5rem"}}>
          <Avatar sx={{ bgcolor: 'var(--secondary-brand-color-yellow2)', color: 'black'}}>{initials}</Avatar>
        </IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}

          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>

          <LogoutContainer onClick={handleLogout}>
            <LabelWithPointer>{t('logoutLabel')}</LabelWithPointer>
            <LogoutIcon src={'/logoutIcon.svg'} alt={t('logoutLabel')} />
          </LogoutContainer>
          
        </Popover>

      </AvatarDiv>}

    </HeaderWrapper>
  );
};
