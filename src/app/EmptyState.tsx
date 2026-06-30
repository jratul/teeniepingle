"use client";

import styled from "@emotion/styled";

const Wrap = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #c98aa6;
`;

const Emoji = styled.div`
  font-size: 46px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-family: var(--font-jua), sans-serif;
  font-size: 19px;
  color: #e87aa3;
`;

const Hint = styled.div`
  font-size: 13.5px;
  margin-top: 6px;
`;

const ResetButton = styled.button`
  margin-top: 16px;
  cursor: pointer;
  border: none;
  font-family: var(--font-jua), sans-serif;
  font-size: 14px;
  color: #fff;
  background: #ff8fb8;
  padding: 10px 20px;
  border-radius: 999px;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.85;
  }
`;

interface Props {
  onReset: () => void;
}

export default function EmptyState({ onReset }: Props) {
  return (
    <Wrap>
      <Emoji>🔍🩷</Emoji>
      <Title>앗, 찾는 티니핑이 없어요</Title>
      <Hint>검색어나 필터를 바꿔보세요</Hint>
      <ResetButton onClick={onReset}>필터 초기화</ResetButton>
    </Wrap>
  );
}
