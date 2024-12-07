import { Role } from "src/models/Role";
import requests from "./apiService";

export const fetchRoles = async () => {
  const response = await requests.get<Role[]>("Roles");
  return response;
};

