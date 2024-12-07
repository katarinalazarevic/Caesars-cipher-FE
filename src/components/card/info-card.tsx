import { Avatar, Info } from './styled-info-card';
import { Typography } from '@mui/material';

export interface InfoCardProps {
  avatarSrc: string;
  avatarAlt: string;
  text: string;
  customAvatarSrc?: string;
  onDeleteClick? : () => void;
}

const InfoCard = ({ avatarSrc, avatarAlt, text, customAvatarSrc }: InfoCardProps) => {
  return (
    <Info>
      <Avatar src={avatarSrc ?? customAvatarSrc} alt={avatarAlt} />
      <Typography variant='h4'>{text}</Typography>
    </Info>
  );
};

export default InfoCard;