import { useState } from "react";
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
    img {
      scale: 1.1;
    }
  }
`;

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const Image = styled.img`
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
  return (
    <Container onClick={() => setDialogOpen(true)}>
      {dialogOpen && (
        <PingDialog
          pingInfo={pingInfo}
          handleClose={() => setDialogOpen(false)}
        />
      )}
      <ImageBox>
        <Image src={`/images/pings/${pingInfo.img}.webp`} alt={pingInfo.name} />
      </ImageBox>
      <NameHeader color={colors[pingInfo.type]}>{pingInfo.name}</NameHeader>
    </Container>
  );
}
