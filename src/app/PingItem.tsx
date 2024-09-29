import { useState } from "react";
import styled from "@emotion/styled";
import { colors, Ping, pingTypeInfo } from "./contantBase";
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

export default function PingItem({ name, img, seasonNum, type }: Ping) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <Container onClick={() => setDialogOpen(true)}>
      {dialogOpen && (
        <PingDialog
          name={name}
          img={img}
          seasonNum={seasonNum}
          type={type}
          handleClose={() => setDialogOpen(false)}
        />
      )}
      {type in pingTypeInfo && (
        <Badge color={colors[type]}>{pingTypeInfo[type]}</Badge>
      )}
      <div>
        <Image src={img} alt={name} />
      </div>
      <NameHeader>{name}</NameHeader>
    </Container>
  );
}
