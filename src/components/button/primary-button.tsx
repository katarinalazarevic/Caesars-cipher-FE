import {
  StyledButtonProps,
} from "../button/styled-button";
import StyledPrimaryButton from "./styled-primary-button";

interface PrimaryButtonProps extends StyledButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  onClick,
  $bgColor,
  $textColor,
  $borderColor,
  $hoverColor,
  $width,
  type = "button",
  disabled = false,
}: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton
      onClick={onClick}
      $bgColor={$bgColor}
      $textColor={$textColor}
      $borderColor={$borderColor}
      $hoverColor={$hoverColor}
      $width={$width}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;