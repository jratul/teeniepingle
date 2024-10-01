"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "@emotion/styled";
import FilterContent from "./FilterContent";

const Container = styled.div`
  margin: 5px 0;
`;

const OpenButton = styled.button`
  font-size: 1.5rem;
  border: 0;
  background: white;
  vertical-align: middle;
  display: flex;
  align-items: center;
`;

export default function Filter() {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpenButton = () => {
    setOpen((open) => !open);
  };

  return (
    <Container>
      <OpenButton onClick={handleOpenButton}>
        {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
        필터
      </OpenButton>
      <FilterContent open={open} />
    </Container>
  );
}
