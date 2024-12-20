import styled from "@emotion/styled";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

interface Props {
  checked: boolean;
  setChecked: () => void;
  color?: string;
  content: string;
}

const CheckBoxContainer = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
  cursor: pointer;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 3px;
`;

export default function CheckBox({
  checked,
  setChecked,
  color = "black",
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
