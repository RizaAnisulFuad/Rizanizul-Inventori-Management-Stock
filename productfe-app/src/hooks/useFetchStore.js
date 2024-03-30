import { create } from "zustand";

export const useFetchStore = create((set) => ({
  refetchProduct: false,
  setRefetchProduct: (refetchProduct) => set({ refetchProduct }),
}));
