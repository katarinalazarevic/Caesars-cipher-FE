import requests from "./apiService";
import { User, UserCreate } from "../models/User";

export const fetchUsers = async (Page: number, PageSize: number, TotalCount: number, SearchQuery?:string  ) => {
  return await requests.get<{
    items: User[];
    page: number;
    pageSize: number;
    totalCount: number;
  }>("Users", { Page, PageSize, TotalCount, SearchQuery });
};

export const createUser = async( firstName:string, lastName:string, email:string, roleId: number) => {
  const body: UserCreate={ firstName, lastName, email,roleId}
  const response =await requests.post("/Users", body);
  return response;
}

export const modifyUser = async(id:number, firstName:string, lastName:string, email:string, roleId: number) => {
  const body: UserCreate={ firstName, lastName, email,roleId}
  const response =await requests.put(`/Users/${id}`, body);
  return response;
}

export const deleteUser = async (id :number) => {
  const response= await requests.delete<void>(`Users/${id}`);
  return response;
}