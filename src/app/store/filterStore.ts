import { create } from "zustand";
import { colors } from "../contant";

export interface FilterItem {
  name: string;
  checked: boolean;
  color: string;
}

export interface FilterGroup {
  [groupName: string]: {
    [filterName: string]: FilterItem;
  };
}

interface FilterGroupState {
  filterGroup: FilterGroup;
  isAllChecked: { [groupName: string]: boolean };
  toggleItem: (groupName: string, filterName: string) => void;
  toggleAll: (groupName: string) => void;
}

export const useFilterStore = create<FilterGroupState>((set, get) => ({
  isAllChecked: { season: true, type: true },
  filterGroup: {
    season: {
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
    },
    type: {
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
  },
  toggleItem: (groupName, filterName) => {
    const { filterGroup, isAllChecked } = get();

    const newFilterGroup: FilterGroup = {
      ...filterGroup,
    };

    newFilterGroup[groupName][filterName].checked =
      !newFilterGroup[groupName][filterName].checked;

    const allChecked = Object.values(newFilterGroup[groupName]).every(
      (filterItem) => filterItem.checked
    );

    set({
      filterGroup: newFilterGroup,
      isAllChecked: { ...isAllChecked, [groupName]: allChecked },
    });
  },
  toggleAll: (groupName) => {
    const { filterGroup, isAllChecked } = get();

    const newFilterGroup: FilterGroup = {
      ...filterGroup,
    };

    Object.values(newFilterGroup[groupName]).map((filterItem) => {
      filterItem.checked = !isAllChecked[groupName];
    });

    set({
      filterGroup: newFilterGroup,
      isAllChecked: { ...isAllChecked, [groupName]: !isAllChecked[groupName] },
    });
  },
}));
