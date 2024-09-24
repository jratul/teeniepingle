import styled from "@emotion/styled";
import CheckBox from "./CheckBox";
import { Filter, useFilterStore } from "./store/filterStore";

interface Props {
  open: boolean;
}

const Wrapper = styled.div<Props>`
  max-height: ${(props) => (props.open ? "200px" : "0")};
  transition: max-height 0.4s ease;
  overflow: hidden;
  background: #f1f5f9;
  border-radius: 5px;
`;

const Inner = styled.div`
  padding: 20px;
`;

export default function FilterContent({ open }: Props) {
  const { filter, setFilter } = useFilterStore();

  const handleCheckBoxChange = (key: string) => {
    const newFilter: Filter = {
      ...filter,
      [key]: {
        ...filter[key],
        checked: !filter[key].checked, // 체크 상태를 토글
      },
    };
    setFilter(newFilter); // 함수가 아니라 새로운 객체를 직접 전달
  };

  return (
    <Wrapper open={open}>
      <Inner>
        {Object.entries(filter).map(([key, filterItem]) => (
          <CheckBox
            key={key}
            checked={filterItem.checked}
            setChecked={() => handleCheckBoxChange(key)}
            color={filterItem.color}
            content={filterItem.name}
          />
        ))}
      </Inner>
    </Wrapper>
  );
}
