import { create } from "zustand";

export interface Filter {
  [key: string]: {
    name: string;
    checked: boolean;
    color: string;
  };
}

interface FilterState {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: {
    first: {
      name: "1기",
      checked: true,
      color: "#FF69B4",
    },
    second: {
      name: "2기(반짝반짝)",
      checked: true,
      color: "#90E7FE",
    },
    third: {
      name: "3기(알쏭달쏭)",
      checked: true,
      color: "#E44C59",
    },
    fourth: {
      name: "4기(새콤달콤)",
      checked: true,
      color: "#E1A5E6",
    },
    fifth: {
      name: "5기(슈팅스타)",
      checked: true,
      color: "#666CD7",
    },
  },
  setFilter: (filter) => set((state) => ({ filter: filter })),
}));
