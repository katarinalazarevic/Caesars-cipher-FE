import styled from 'styled-components';

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  @media (max-width: 769px) {
    width: 1.0rem;
    height: 1.0rem;
  }
`;

interface IconButtonProps {
  icon: string;
  altText: string;
  onClick?: () => void;
}

const IconListItemButton = ({ icon, altText, onClick }: IconButtonProps) => {
  return (
      <Icon src={icon} alt={altText} onClick={onClick}/>
  );
};

export default IconListItemButton;