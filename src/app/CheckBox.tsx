"use client";

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
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setChecked();
    }
  };

  return (
    <CheckBoxContainer
      color={color}
      onClick={setChecked}
      onKeyDown={handleKeyDown}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
    >
      <IconWrapper aria-hidden="true">
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </IconWrapper>
      {content}
    </CheckBoxContainer>
  );
}
