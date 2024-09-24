import styled from "@emotion/styled";
import CheckBox from "./CheckBox";
import { Filter, useFilterStore } from "./store/filterStore";

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

export default function FilterContent({ open }: Props) {
  const { filter, setFilter } = useFilterStore();

  const handleCheckBoxChange = (key: string) => {
    const newFilter: Filter = {
      ...filter,
      [key]: {
        ...filter[key],
        checked: !filter[key].checked,
      },
    };
    setFilter(newFilter);
  };

  return (
    <Wrapper open={open}>
      <div>
        {Object.entries(filter).map(([key, filterItem]) => (
          <CheckBox
            key={key}
            checked={filterItem.checked}
            setChecked={() => handleCheckBoxChange(key)}
            color={filterItem.color}
            content={filterItem.name}
          />
        ))}
      </div>
    </Wrapper>
  );
}
