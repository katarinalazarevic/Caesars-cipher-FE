import { create } from "zustand";
import { persist } from "zustand/middleware";
import { login as loginApi, LoginResponse, refreshTokenAsync } from "src/services/authService";
import { Roles } from "src/enums/Roles";

export interface AuthStore {
  token: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  firstName: string;
  lastName:string;
  initials:string;
  role: string;
  email: string;
  companyId: string;
  refreshTokenInProgress: boolean;
  requestQueue: Array<{ resolve: (value: string) => void; reject: (reason: any) => void }>;
  
  login: (email: string, password: string) => Promise<{ token: string; refreshToken: string }>;
  getToken: () => string | null;
  
  setRefreshTokenInProgress: (inProgress: boolean) => void;
  refreshTokenAsync: (token: string) => Promise<LoginResponse>;
  
  addRequestToQueue: (request: { resolve: (value: string) => void; reject: (reason: any) => void }) => void;
  clearRequestQueue: () => void;
  
  createNewPassword: (token: string, password: string) => Promise<boolean>;
  
  hasRole: (roleName: string) => boolean;

  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
      (set, get) => ({
        token: null,
        refreshToken: null,
        isLoggedIn: false,
        role: '',
        email: '',
        firstName: '',
        lastName:'',
        initials:'',
        companyId: '',
        refreshTokenInProgress: false,
        requestQueue: [],

        logout: () => set({
          token: null,
          refreshToken: null,
          isLoggedIn: false,
          role: '',
          email: '',
          firstName: '',
          lastName:'',
          initials:'',
          companyId: '',
          refreshTokenInProgress: false,
          requestQueue: [],
        }),

        login: async (email, password) => {
          try {
            const data = await loginApi(email, password);
            const arrayToken = data.token.split('.');
            const tokenPayload = JSON.parse(atob(arrayToken[1]));
            const roleFromToken = tokenPayload.role;

            set({
              token: data.token,
              refreshToken: data.refreshToken,
              isLoggedIn: true,
              role: roleFromToken,
              firstName:tokenPayload.name,
              lastName:tokenPayload.lastName,
              initials:tokenPayload.name[0]+tokenPayload.lastName[0],
              email,
            });
            
            return data;
          } catch (error) {
            console.error('Login failed:', error);
            throw error;
          }
        },

        getToken: () => get().token,
        
        setRefreshTokenInProgress: (inProgress) => set({ refreshTokenInProgress: inProgress }),
        
        refreshTokenAsync: async (token) => {
          try {
            const data = await refreshTokenAsync(token);
            set({
              token: data.token,
              refreshToken: data.refreshToken,
            });

            return data;
          } catch (error) {
            console.log(error);
            throw error;
          }
        },

        addRequestToQueue: (request) => set((state) => ({
          requestQueue: [...state.requestQueue, request],
        })),

        clearRequestQueue: () => set({ requestQueue: [] }),


        hasRole: (roleName) => get().role === roleName,


        createNewPassword: async (token, password) => {
          return true;
        },

      }),
      { name: 'AuthStore' }

  )
);