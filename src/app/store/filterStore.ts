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
      name: "1기(큐브)",
      checked: true,
      color: "#FF69B4",
    },
    second: {
      name: "2기(보석)",
      checked: true,
      color: "#90E7FE",
    },
    third: {
      name: "3기(열쇠)",
      checked: true,
      color: "#E44C59",
    },
    fourth: {
      name: "4기(디저트)",
      checked: true,
      color: "#E1A5E6",
    },
    fifth: {
      name: "5기(스타)",
      checked: true,
      color: "#666CD7",
    },
    movieFirst: {
      name: "극장판 1기(사랑의 하츄핑)",
      checked: true,
      color: "#f87171",
    },
    royal: {
      name: "로열 티니핑",
      checked: true,
      color: "#d97706",
    },
    legend: {
      name: "레전드 티니핑",
      checked: true,
      color: "#7c3aed",
    },
    normal: {
      name: "일반 티니핑",
      checked: true,
      color: "#16a34a",
    },
    villain: {
      name: "빌런 티니핑",
      checked: true,
      color: "#334155",
    },
  },
  setFilter: (filter) => set((state) => ({ filter: filter })),
}));
