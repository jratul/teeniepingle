"use client";

import styled from "@emotion/styled";

const Wrap = styled.div`
  position: sticky;
  top: 128px;
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  background: rgba(255, 245, 250, 0.92);
  backdrop-filter: blur(4px);
  padding: 9px 10px;
  border-radius: 16px;
  margin-bottom: 14px;
  box-shadow: 0 2px 10px rgba(255, 150, 190, 0.12);
`;

const JumpItem = styled.button`
  cursor: pointer;
  font-family: var(--font-jua), sans-serif;
  font-size: 14px;
  min-width: 30px;
  text-align: center;
  padding: 5px 0;
  border-radius: 9px;
  color: #e87aa3;
  background: #fff;
  border: none;
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: #ff8fb8;
    color: #fff;
  }
`;

interface Props {
  anchors: string[];
  onJump: (anchor: string) => void;
}

export default function JumpBar({ anchors, onJump }: Props) {
  return (
    <Wrap aria-label="자음 목록 점프">
      {anchors.map((a) => (
        <JumpItem key={a} onClick={() => onJump(a)} aria-label={`${a}으로 이동`}>
          {a}
        </JumpItem>
      ))}
    </Wrap>
  );
}
