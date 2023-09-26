import { stringify } from "querystring";
import { create } from "zustand";

interface SearchLibrary {
    search: string;
    setSearch: (search: string) => void;
}

export const useSearchLibrary = create<SearchLibrary>((set)=>({
    search: '',
    setSearch: (search: string) => {
        set({search: search})
    }
}))