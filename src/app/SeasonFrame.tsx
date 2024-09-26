import styled from "@emotion/styled";
import { Season } from "./contant";

const Title = styled.h2<{ color: string }>`
  color: ${(props) => props.color};
`;

const Frame = styled.div<{ color: string }>`
  border-radius: 5px;
  border: 3px solid;
  margin-bottom: 30px;
  color: ${(props) => props.color};
`;

export default function SeasonFrame({
  seasonNum,
  color,
  name,
  filterKey,
}: Season) {
  return (
    <div>
      <Title color={color}>{name}</Title>
      <Frame color={color}></Frame>
    </div>
  );
}
