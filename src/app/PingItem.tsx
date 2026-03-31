"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { colors, Ping } from "./constant";
import PingDialog from "./PingDialog";

interface Props {
  pingInfo: Ping;
  priority?: boolean;
}

const Container = styled.div`
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  position: relative;
  margin-bottom: 1rem;
  &:hover {
    text-decoration: underline black;
    Img {
      scale: 1.1;
    }
  }
`;

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  object-fit: contain;
`;

const NameHeader = styled.h3<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 600;
`;

export default function PingItem({ pingInfo, priority = false }: Props) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
    window.history.pushState({}, "");
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleDialogOpen();
    }
  };

  return (
    <Container
      onClick={handleDialogOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {dialogOpen && (
        <PingDialog pingInfo={pingInfo} handleClose={handleDialogClose} />
      )}
      <ImageBox>
        <Img
          src={`/images/pings/${pingInfo.img}.webp`}
          alt={pingInfo.name}
          width={150}
          height={150}
          priority={priority}
          sizes="(max-width: 768px) 30vw, 150px"
        />
      </ImageBox>
      <NameHeader color={colors[pingInfo.type]}>{pingInfo.name}</NameHeader>
    </Container>
  );
}
