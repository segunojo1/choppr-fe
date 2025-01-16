import { create } from "zustand";

interface UrlState {
  longUrl: string;
  shortUrl: string;
  error: string;
  loading: boolean;
  setLongUrl: (longUrl: string) => void;
  setShortUrl: (shortUrl: string) => void;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useUrlStore = create<UrlState>((set) => ({
  longUrl: "",
  shortUrl: "",
  error: "",
  loading: false,
  setLongUrl: (longUrl: string) => set({ longUrl }),
  setShortUrl: (shortUrl: string) => set({ shortUrl }),
  setError: (error: string) => set({ error }),
  setLoading: (loading: boolean) => set({ loading })
}));
