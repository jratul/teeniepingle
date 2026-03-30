"use client";

import { useEffect } from "react";
import styled from "@emotion/styled";
import { PRIMARY_COLOR } from "./constant";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: ${PRIMARY_COLOR};
`;

const RetryButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: ${PRIMARY_COLOR};
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <Title>문제가 발생했습니다</Title>
      <p>잠시 후 다시 시도해주세요.</p>
      <RetryButton onClick={reset}>다시 시도</RetryButton>
    </Container>
  );
}
