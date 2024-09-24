"use client";

import styled from "@emotion/styled";
import Filter from "./Filter";

interface Props {
  cols: number;
}

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const Grid = styled.div<Props>`
  display: grid;
  grid-template-colums: repeat(${(props) => props.cols}, 1fr);
`;

export default function Home() {
  return (
    <Container>
      <div>
        <h1>티니핑글</h1>
        <p>당신의 티니핑을 찾아보세요</p>
        <Filter />
        <Grid cols={4}></Grid>
      </div>
    </Container>
  );
}
