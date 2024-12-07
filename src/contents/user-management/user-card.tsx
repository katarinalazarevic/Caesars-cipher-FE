import editIcon from "src/assets/icons/editListItemIcon.svg";
import { User } from "src/models/User";
import PrimaryCard from "src/components/card/primary-card";
import userCardIcon from 'src/assets/icons/userCardIcon.svg';
import { useTranslation } from "react-i18next";
import { useUserStore } from "src/store/user/useUserStore";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {

  const { openEditModal,openDeleteModal } = useUserStore();
  const { t } = useTranslation('userContent')

  const handleOpenDeleteModal = () => {
    openDeleteModal(user.id);
  };
  
  const handleOpenEditModal = () => {
    openEditModal(user);
  };

  const buttons = [
    {
      icon: editIcon,
      altText: t('editUserButton'),
      onClick: handleOpenEditModal,
    },
    
  ];

  return (
    <>
    <PrimaryCard avatarSrc={userCardIcon} onDeleteClick={handleOpenDeleteModal} buttons={buttons} avatarAlt={user.firstName} text={`${user.firstName} ${user.lastName}`} />
    </>
  );
};

export default UserCard;
