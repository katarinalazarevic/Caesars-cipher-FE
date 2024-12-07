import { SearchContainer, SearchIcon, SearchInput } from "./styled-search-bar";

interface Props {
  placeholder: string;
  ariaLabel: string;
  iconSrc: string;
  iconAlt: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ placeholder, ariaLabel, iconSrc, iconAlt, onChange }:Props) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={onChange}
      />
      <SearchIcon src={iconSrc} alt={iconAlt} />
    </SearchContainer>
  );
};

export default SearchBar;