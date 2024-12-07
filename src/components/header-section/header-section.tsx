import { Typography } from "@mui/material";
import { Header, HeaderIcon } from "./styled-header-section";

interface Props {
  iconSrc: string;
  altText: string;
  title: string;
}

const HeaderSection = ({ iconSrc, altText, title }: Props) => {
  return (
    <Header>
      <HeaderIcon src={iconSrc} alt={altText} />
      <Typography variant="h5">{title}</Typography>
    </Header>
  );
};

export default HeaderSection;