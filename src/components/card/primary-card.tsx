import { ActionButtons, CardContainer, DeleteButton } from './styled-primary-card';
import InfoCard, { InfoCardProps } from './info-card';
import { useTranslation } from 'react-i18next';
import deleteIcon from 'src/assets/icons/deleteListItemIcon.svg';
import IconListItemButton from '../button/icon-list-item-button';

interface ButtonConfig {
  icon: string;
  altText: string;
  onClick?: () => void;
}

interface Props {
  buttons: ButtonConfig[];
}

const PrimaryCard = ({ avatarSrc, avatarAlt, buttons, text, onDeleteClick }: Props & InfoCardProps) => {
  const { t } = useTranslation('userContent')
  return (
    <CardContainer>
      <InfoCard avatarSrc={avatarSrc} avatarAlt={avatarAlt} text={text} />
      <ActionButtons>
        {buttons.map((button, index) => (
          <IconListItemButton
          key={index}
          icon={button.icon}
          altText={button.altText}
          onClick={button.onClick}
        />
        ))}
        <DeleteButton src={deleteIcon} alt={t('deleteConfirm')} onClick={onDeleteClick} />
      </ActionButtons>
    </CardContainer>
  );
};

export default PrimaryCard;