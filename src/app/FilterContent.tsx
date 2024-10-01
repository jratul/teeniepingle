import styled from "@emotion/styled";
import CheckBox from "./CheckBox";
import { FilterGroup, FilterItem, useFilterStore } from "./store/filterStore";

interface Props {
  open: boolean;
}

const Wrapper = styled.div<Props>`
  max-height: ${(props) => (props.open ? "auto" : "0")};
  padding: ${(props) => (props.open ? "20px" : "0")};
  transition: max-height 0.4s ease, padding 0.5s ease;
  overflow: hidden;
  background: #f1f5f9;
  border-radius: 5px;
`;

const FilterGroupTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  clear: both;
`;

const FilterGroupBox = styled.div<{ marginBottom: string }>`
  margin: 0.5rem 0 ${(props) => props.marginBottom} 0;
`;

export default function FilterContent({ open }: Props) {
  const { filterGroup, isAllChecked, toggleItem, toggleAll } = useFilterStore();

  const handleCheckBoxChange = (groupName: string, filterName: string) => {
    toggleItem(groupName, filterName);
  };

  return (
    <Wrapper open={open}>
      <div>
        <FilterGroupTitle>시즌</FilterGroupTitle>
        <CheckBox
          checked={isAllChecked.season}
          setChecked={() => toggleAll("season")}
          content="모든 시즌"
        />
        <FilterGroupBox marginBottom="5rem">
          {Object.entries(filterGroup.season).map(
            ([filterName, filterItem]) => (
              <CheckBox
                key={filterName}
                checked={filterItem.checked}
                setChecked={() => handleCheckBoxChange("season", filterName)}
                color={filterItem.color}
                content={filterItem.name}
              />
            )
          )}
        </FilterGroupBox>
        <FilterGroupTitle>타입</FilterGroupTitle>
        <CheckBox
          checked={isAllChecked.type}
          setChecked={() => toggleAll("type")}
          content="모든 타입"
        />
        <FilterGroupBox marginBottom="0">
          {Object.entries(filterGroup.type).map(([filterName, filterItem]) => (
            <CheckBox
              key={filterName}
              checked={filterItem.checked}
              setChecked={() => handleCheckBoxChange("type", filterName)}
              color={filterItem.color}
              content={filterItem.name}
            />
          ))}
        </FilterGroupBox>
      </div>
    </Wrapper>
  );
}
