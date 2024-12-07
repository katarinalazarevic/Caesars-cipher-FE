import { create } from "zustand"

interface LanguageStore {
    selectedLanguage:string,
    setSelectedLanguage: (newLanguage:string) => void;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
    selectedLanguage:'sr',
    setSelectedLanguage: (newLanguage) => {
        set((state)=> ({selectedLanguage:(state.selectedLanguage=newLanguage)}))
    }
})
)