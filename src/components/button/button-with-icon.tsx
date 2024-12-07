import styled from 'styled-components';
import { StyledButtonWithIcon  } from './styled-button-with-icon';
import { StyledButtonProps } from './styled-button';

interface ButtonWithIconProps extends StyledButtonProps {
  icon: string;
  altText: string;
}

const ButtonIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 5px;
`;

const ButtonWithIcon = ({ icon, altText, children, ...props }: ButtonWithIconProps) => {
  return (
    <StyledButtonWithIcon {...props}>
      <ButtonIcon src={icon} alt={altText} />
      {children}
    </StyledButtonWithIcon>
  );
};

export default ButtonWithIcon;