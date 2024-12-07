import { create } from 'zustand';

interface ToastMessage {
  title: string;
  date: string;
  icon: string;
  backgroundColor: string;
}

interface ToastState {
  toasts: Record<string, ToastMessage>;
  addToast: (toast: ToastMessage) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: {},

  addToast: (toast) => {
    const id = Math.random().toString(36).substring(7); 
    set((state) => ({
      toasts: { ...state.toasts, [id]: { ...toast, id } }, 
    }));

    setTimeout(() => {
      set((state) => {
        const newToasts = { ...state.toasts };
        delete newToasts[id];
        return { toasts: newToasts };
      });
    }, 5000);
  },

  removeToast: (id) => set((state) => {
    const newToasts = { ...state.toasts };
    delete newToasts[id];
    return { toasts: newToasts };
  }),
}));
