import { createUser, deleteUser, fetchUsers, modifyUser } from "src/services/userService";
import { User } from "src/models/User";
import { create } from "zustand";
import debounce from "@mui/material/utils/debounce";

interface UserStore {
  userId:number;
  isModalOpen: boolean;
  isDeleteModalOpen:boolean;
  isEditModalOpen: boolean;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  roleName: string;
  users: User[];
  page: number;
  pageSize: number;
  totalCount: number;
  searchQuery: string;
  fetchUsers: (
    page: number,
    pageSize: number,
    totalCount: number,
    searchQuery?: string
  ) => Promise<void>;
  searchUsers: (query: string) => void;
  openModal: () => void;
  closeModal: () => void;
  createUser: (
    firstName: string,
    lastName: string,
    email: string,
    roleId: number
  ) => Promise<void>;

  modifyUser: (
    id:number,
    firstName: string,
    lastName: string,
    email: string,
    roleId: number
  ) => Promise<void>;

  closeEditModal: () => void;
  currentUser: User | null;
  openEditModal: (user: User) => void;
  openDeleteModal: (userId:number) => void;
  closeDeleteModal: () => void;
  deleteUser : () => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  userId: 0,
  isModalOpen: false,
  isEditModalOpen: false,
  isDeleteModalOpen: false,
  currentUser: null,
  firstName: "",
  email: "",
  lastName: "",
  roleName: "",
  roleId: 0,
  users: [],
  page: 1,
  pageSize: 7,
  totalCount: 0,
  searchQuery: "",
  fetchUsers: async (page, pageSize, totalCount, searchQuery = "") => {
    const data = await fetchUsers(page, pageSize, totalCount, searchQuery);
    set({
      users: data.items,
      page: data.page,
      pageSize: data.pageSize,
      totalCount: data.totalCount,
      searchQuery,
    });
  },
  searchUsers: debounce((query) => {
    const { pageSize, totalCount, searchQuery } = get();
    if (searchQuery !== query.trim()) {
      set({ searchQuery: query.trim(), page: 1 });
      get().fetchUsers(1, pageSize, totalCount, query.trim());
    }
  }, 300),
  createUser: async (firstName, lastName, email, roleId) => {
    await createUser(firstName, lastName, email, roleId);
    const { page, pageSize, totalCount, searchQuery } = get();
    get().fetchUsers(page, pageSize, totalCount, searchQuery);
  },
  modifyUser: async (id, firstName, lastName, email, roleId) => {
    await modifyUser(id, firstName, lastName, email, roleId);
    const { page, pageSize, totalCount, searchQuery } = get();
    get().fetchUsers(page, pageSize, totalCount, searchQuery);
  },
  openModal: () => {
    set((state) => ({ isModalOpen: (state.isModalOpen = true) }));
  },
  closeModal: () => {
    const { fetchUsers, page, pageSize, totalCount, searchQuery } = get();
    set((_) => ({ isModalOpen: false }));
    fetchUsers(page, pageSize, totalCount, searchQuery);
  },
  openEditModal: (user) => {
    set((state) => ({
      isEditModalOpen: (state.isEditModalOpen = true),
      currentUser: (state.currentUser = user),
    }));
  },
  closeEditModal: () => {
    set((state) => ({ isEditModalOpen: (state.isEditModalOpen = false) }));
  },
  openDeleteModal: (userId) => {
    set((state) => ({
      isDeleteModalOpen: (state.isDeleteModalOpen = true),
      userId: (state.userId = userId),
    }));
  },
  closeDeleteModal: () => {
    set((state) => ({ isDeleteModalOpen: (state.isDeleteModalOpen = false) }));
  },
  deleteUser: async () => {
    const { fetchUsers, page, pageSize, totalCount, searchQuery, userId } = get();
    await deleteUser(userId);
    fetchUsers(page, pageSize, totalCount, searchQuery);
    set((state) => ({ isDeleteModalOpen: (state.isDeleteModalOpen = false) }));
  },
}));
