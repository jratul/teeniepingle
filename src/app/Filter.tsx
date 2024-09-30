"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "@emotion/styled";
import FilterContent from "./FilterContent";

const OpenButton = styled.button`
  border: 0;
  background: white;
`;

export default function Filter() {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpenButton = () => {
    setOpen((open) => !open);
  };

  return (
    <div style={{ margin: "5px 0" }}>
      <OpenButton onClick={handleOpenButton}>
        {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </OpenButton>
      필터
      <FilterContent open={open} />
    </div>
  );
}
