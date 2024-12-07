import UserSearchBar from '../user-search-bar';
import { ControlsWrapper } from './styled-user-list-controls';
import { useUserStore } from 'src/store/user/useUserStore';
import plusIcon from 'src/assets/icons/plus-icon.svg';
import { CreateUserAccountModal } from 'src/contents/create-user-account-modal/create-user-account-modal';
import { useTranslation } from 'react-i18next';
import ButtonWithIcon from 'src/components/button/button-with-icon';

const UserListControls = () => {
  const { searchUsers, isModalOpen, openModal, closeModal } = useUserStore();
  
  const { t } = useTranslation('userContent')
  const handleSearch = (query: string) => {
    searchUsers(query);
  };

  return (
    <ControlsWrapper>
      <UserSearchBar onSearch={handleSearch}/>
      <ButtonWithIcon
        icon={plusIcon}
        altText={t('addUserButton')}
        $bgColor="--login-button"
        $textColor="--text-color-gray"
        $hoverColor="--login-button-hover"
        onClick={openModal}
      >
        {t('addUserButton')}
      </ButtonWithIcon>
      {isModalOpen && <CreateUserAccountModal onClose={closeModal} />}
    </ControlsWrapper>
  );
};

export default UserListControls;