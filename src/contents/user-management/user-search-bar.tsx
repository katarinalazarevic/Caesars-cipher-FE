import debounce from '@mui/material/utils/debounce';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import searchIcon from 'src/assets/icons/search-icon.svg';
import SearchBar from 'src/components/search-bar/search-bar';

interface Props {
  onSearch: (query: string) => void;
}

const UserSearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState('');

  const { t }= useTranslation('userContent')

  const debouncedSearch = useCallback(
    debounce((q) => onSearch(q), 300),
    [onSearch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <SearchBar
      placeholder={t('searchPlaceHolder')}
      ariaLabel={t('searchPlaceHolder')}
      iconSrc={searchIcon}
      iconAlt="Search icon"
      onChange={handleChange}
    />
  );
};

export default UserSearchBar;