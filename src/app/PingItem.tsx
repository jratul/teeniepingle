import { useState } from "react";
import styled from "@emotion/styled";
import { colors, Ping, pingTypeData } from "./contant";
import PingDialog from "./PingDialog";

const Container = styled.div`
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  position: relative;
  &:hover {
    text-decoration: underline black;
    img {
      scale: 1.1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  transition: all 1s ease-in-out;
`;

const NameHeader = styled.h3`
  color: black;
  font-weight: 500;
`;

const Badge = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  position: absolute;
  left: 10px;
  top: 0;
  z-index: 10;
`;

export default function PingItem({ pingInfo }: { pingInfo: Ping }) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <Container onClick={() => setDialogOpen(true)}>
      {dialogOpen && (
        <PingDialog
          pingInfo={pingInfo}
          handleClose={() => setDialogOpen(false)}
        />
      )}
      <Badge color={colors?.[pingInfo.type]}>
        {pingTypeData[pingInfo.type]}
      </Badge>
      <div>
        <Image src={pingInfo.img} alt={pingInfo.name} />
      </div>
      <NameHeader>{pingInfo.name}</NameHeader>
    </Container>
  );
}
