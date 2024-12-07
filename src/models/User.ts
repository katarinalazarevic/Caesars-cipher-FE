export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roleName: string;
  roleId: number;
  companyId: number | null;
}

export interface UserCreate {
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
}
