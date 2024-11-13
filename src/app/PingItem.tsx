import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { colors, Ping } from "./contant";
import PingDialog from "./PingDialog";

interface Props {
  pingInfo: Ping;
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

export default function PingItem({ pingInfo }: Props) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
    window.history.pushState({}, "");
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container onClick={handleDialogOpen}>
      {dialogOpen && (
        <PingDialog pingInfo={pingInfo} handleClose={handleDialogClose} />
      )}
      <ImageBox>
        <Img
          src={`/images/pings/${pingInfo.img}.webp`}
          alt={pingInfo.name}
          width={150}
          height={150}
          priority
        />
      </ImageBox>
      <NameHeader color={colors[pingInfo.type]}>{pingInfo.name}</NameHeader>
    </Container>
  );
}
