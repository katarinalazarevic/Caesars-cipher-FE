import { create } from 'zustand';
import debounce from '@mui/material/utils/debounce';
import { createCompany, fetchCompanies, fetchCompanyById, updateCompany,deleteCompany } from 'src/services/companyService';
import { Company } from 'src/models/Company';

interface CompanyStore {
  companyId:number;
  isDeleteModalOpen:boolean;
  companies: Company[];
  company: Company | null;
  page: number;
  pageSize: number;
  totalCount: number;
  searchQuery: string;
  isLoading: boolean;
  
  createCompany : (form :FormData) => Promise<void>
  fetchCompanies: (page: number, pageSize: number, totalCount: number, searchQuery?: string) => Promise<void>;
  fetchCompanyById: (id: number) => Promise<void>;
  updateCompany: (id: number, form: FormData) => Promise<void>;
  searchCompany: (query: string) => void;

  isCompanyModalOpen:boolean;
  openModal: () => void; 
  closeModal: () => void;
  openDeleteModal: (companyId:number) => void;
  closeDeleteModal: () => void;
  deleteCompany : () => Promise<void>;
}

export const useCompanyStore = create<CompanyStore>((set, get) => ({
  companyId: 0,
  isDeleteModalOpen: false,
  companies: [],
  company: null,
  page: 1,
  pageSize: 4,
  totalCount: 0,
  searchQuery: '',
  isLoading: false,
  isCompanyModalOpen: false,

  fetchCompanies: async (page, pageSize, totalCount, searchQuery = '') => {
    const data = await fetchCompanies(page, pageSize, totalCount, searchQuery);
    set({
      companies: data.items,
      page: data.page,
      pageSize: data.pageSize,
      totalCount: data.totalCount,
      searchQuery,
    });
  },
  
  fetchCompanyById: async (id: number) => {
    set({ isLoading: true });
    const company = await fetchCompanyById(id);
    set({ company, isLoading: false });
  },

  createCompany: async (form:FormData) => {
    await createCompany(form);
  },

  updateCompany: async (id: number, form: FormData) => {
    await updateCompany(id, form);
    const { page, pageSize, totalCount, searchQuery, fetchCompanies } = get();
    await fetchCompanies(page, pageSize, totalCount, searchQuery);
  },

  searchCompany: debounce((query) => {
      const { pageSize, totalCount, searchQuery } = get();
      if(searchQuery !== query.trim()){
        set({ searchQuery: query.trim(), page: 1 });
        get().fetchCompanies(1, pageSize, totalCount, query.trim());
      }
  }, 300),

  openModal: () => {
    set((state) => ({ isCompanyModalOpen: (state.isCompanyModalOpen = true) }));
  },

  closeModal: () => {
    set((_) => ({ isCompanyModalOpen: false }));
  },

  openDeleteModal: (companyId) => {
    set((state) => ({ 
      isDeleteModalOpen:  (state.isDeleteModalOpen=true), 
      companyId:(state.companyId=companyId)
    }));
  },
  closeDeleteModal: () => {
    set((state) => ({ isDeleteModalOpen: (state.isDeleteModalOpen = false) }));
  },
  deleteCompany: async () => {
    const { fetchCompanies,page, pageSize, totalCount, searchQuery,companyId } = get();
    await deleteCompany(companyId);
    fetchCompanies(page,pageSize,totalCount,searchQuery);
    set((state) => ({isDeleteModalOpen:(state.isDeleteModalOpen=false)}))
  },

}));