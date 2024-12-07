import UserHeaderSection from "./user-header-section";
import UserListControls from "./user-list-controls/user-list-controls";
import UserPagination from "./user-pagination";
import UserCard from "./user-card";
import { UserListWrapper, UserManagementContainer } from "./styled-user-list";
import { useUserStore } from "src/store/user/useUserStore";
import { useEffect } from "react";
import { User } from "src/models/User";
import { useTranslation } from "react-i18next";
import { NoContentMessage } from "src/components/no-results-message/styled-no-content";
import { EditUserModal } from "../edit-user-accout-modal/edit-user-modal";
import { useRoleStore } from "src/store/role/useRoleStore";
import ConfirmationModal from "src/components/confirmation-modal/confirmation-modal";

const UserList = () => {
  const { users, page, pageSize, totalCount, fetchUsers, searchQuery, isEditModalOpen,
    isDeleteModalOpen, deleteUser, closeDeleteModal
   } = useUserStore();
  const { t } = useTranslation('userContent');
  const { fetchRoles,roles } = useRoleStore();

  const onConfirmDelete = async () => {
    await deleteUser();
  }

  useEffect(() => {
    fetchUsers(page, pageSize, totalCount, searchQuery);
    fetchRoles();
  }, [page, searchQuery, fetchUsers]);

 
  return (
    <UserManagementContainer>
      <UserHeaderSection />
      <UserListControls />
      <UserListWrapper>
        {users.length > 0 ? (
          users.map((user: User) => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          <NoContentMessage>
            {t('noSearchContent')}
          </NoContentMessage>
        )}
      </UserListWrapper>

      {isEditModalOpen && <EditUserModal/>}

      {isDeleteModalOpen && (
        <ConfirmationModal
        title={t('deleteTitle')}
        message={t('deleteMessage')}
        confirmText={t('deleteConfirm')}
        cancelText={t('deleteCancel')}
        onConfirm={onConfirmDelete}
        onCancel={closeDeleteModal}
      />
      )}
      
      {users.length > 0 && (
        <UserPagination
          currentPage={page}
          totalPages={Math.ceil(totalCount / pageSize)}
          onPageChange={(newPage) => fetchUsers(newPage, pageSize, totalCount, searchQuery)}
        />
      )}
    </UserManagementContainer>
  );
};

export default UserList;