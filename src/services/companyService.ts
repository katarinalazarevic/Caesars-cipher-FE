import { Company } from "src/models/Company";
import requests from "./apiService";

export const fetchCompanies = async (page: number, pageSize: number, totalCount: number, searchQuery?:string ) => {
  return await requests.get<{
    items: Company[];
    page: number;
    pageSize: number;
    totalCount: number;
  }>("Company", { page, pageSize, totalCount, searchQuery });
};

export const fetchCompanyById = async (id: number): Promise<Company> => {
  return await requests.get<Company>(`Company/${id}`);
};

export const createCompany = async (formData: FormData): Promise<void> => {
  await requests.post<void>("Company",formData);
};
export const deleteCompany = async (id :number) => {
  const response= await requests.delete<void>(`Company/${id}`);
  return response;
}

export const updateCompany = async (id: number, formData: FormData): Promise<void> => {
  await requests.put<void>(`Company/${id}`, formData);
};