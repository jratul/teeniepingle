import { create } from "zustand";
import { colors } from "../contantBase";

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
      color: colors.first,
    },
    second: {
      name: "2기(보석)",
      checked: true,
      color: colors.second,
    },
    third: {
      name: "3기(열쇠)",
      checked: true,
      color: colors.third,
    },
    fourth: {
      name: "4기(디저트)",
      checked: true,
      color: colors.fourth,
    },
    fifth: {
      name: "5기(스타)",
      checked: true,
      color: colors.fifth,
    },
    movieFirst: {
      name: "극장판 1기(사랑의 하츄핑)",
      checked: true,
      color: colors.movieFirst,
    },
    royal: {
      name: "로열 티니핑",
      checked: true,
      color: colors.royal,
    },
    legend: {
      name: "레전드 티니핑",
      checked: true,
      color: colors.legend,
    },
    normal: {
      name: "일반 티니핑",
      checked: true,
      color: colors.normal,
    },
    villain: {
      name: "빌런 티니핑",
      checked: true,
      color: colors.villain,
    },
  },
  setFilter: (filter) => set((state) => ({ filter: filter })),
}));
