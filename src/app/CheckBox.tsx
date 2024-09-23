import styled from "@emotion/styled";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

interface Props {
  checked: boolean;
  setChecked: () => void;
  color: string;
  content: string;
}

const CheckBoxContainer = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
  cursor: pointer;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 3px;  /* 아이콘과 텍스트 사이 간격 */
`;

export default function CheckBox({
  checked,
  setChecked,
  color,
  content,
}: Props) {
  return (
    <CheckBoxContainer color={color} onClick={setChecked}>
      <IconWrapper>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </IconWrapper>
      {content}
    </CheckBoxContainer>
  );
}
