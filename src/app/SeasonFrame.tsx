import styled from "@emotion/styled";
import { Ping, Season } from "./contantBase";
import PingItem from "./PingItem";

const Title = styled.h2<{ color: string }>`
  color: ${(props) => props.color};
`;

const Frame = styled.div<{ color: string }>`
  border-radius: 5px;
  border: 2px solid;
  margin-bottom: 30px;
  padding: 10px;
  color: ${(props) => props.color};
`;

interface Props extends Season {
  pingList: Ping[];
}

const Container = styled.div`
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const GridItem = styled.div`
  grid-column: span 1 / span 1;
`;

export default function SeasonFrame({
  seasonNum,
  color,
  name,
  filterKey,
  pingList,
}: Props) {
  return (
    <div>
      <Title color={color}>{name}</Title>
      <Frame color={color}>
        <Container>
          {pingList.map((pingItem) => (
            <GridItem key={pingItem.name}>
              <PingItem
                name={pingItem.name}
                img={pingItem.img}
                seasonNum={pingItem.seasonNum}
                type={pingItem.type}
              />
            </GridItem>
          ))}
        </Container>
      </Frame>
    </div>
  );
}
