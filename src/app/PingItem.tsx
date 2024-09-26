import styled from "@emotion/styled";
import { Ping } from "./contant";

const Container = styled.div`
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline black;
    img {
      scale: 1.1;
    }
  }
`;

const Image = styled.img`
  width: 90%;
  transition: all 1s ease-in-out;
`;

const NameHeader = styled.h3`
  color: black;
  font-weight: 500;
`;

export default function PingItem({ name, img, seasonNum, type }: Ping) {
  return (
    <Container>
      <div>
        <Image src={img} alt={name} />
      </div>
      <NameHeader>{name}</NameHeader>
    </Container>
  );
}
