"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "@emotion/styled";
import FilterContent from "./FilterContent";

const OpenButton = styled.button`
  border: 0;
  background: white;
  cursor: pointer;
`;

export default function Filter() {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpenButton = () => {
    setOpen((open) => !open);
  };

  return (
    <div>
      <OpenButton onClick={handleOpenButton}>
        {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </OpenButton>
      <FilterContent open={open} />
    </div>
  );
}
