import { Role } from "src/models/Role";
import { fetchRoles } from "src/services/roleService";
import { create } from "zustand"
import { persist } from "zustand/middleware";

export interface RoleStore {
    roles : Role[];
    fetchRoles : () => Promise<void>;
}

export const useRoleStore = create<RoleStore>  ((set,get) =>({
    roles:[],
    fetchRoles : async () => {
        const data= await fetchRoles();
        set((state) => ({
            ...state,
            roles:[...data]}));
    }
}));
