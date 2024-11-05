import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Ping, Season } from "./contant";
import PingItem from "./PingItem";

interface Props extends Season {
  pingList: Ping[];
}

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

export default function SeasonFrame({ color, name, pingList }: Props) {
  return (
    <div>
      <Title color={color}>{name}</Title>
      <Frame color={color}>
        <Container>
          {pingList.map((pingItem) => (
            <GridItem key={pingItem.name}>
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: -10,
                }}
                whileInView={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <PingItem pingInfo={pingItem} />
              </motion.div>
            </GridItem>
          ))}
        </Container>
      </Frame>
    </div>
  );
}
