"use client";

import { useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Ping, seasonData, typeData } from "./constant";
import Portal from "./Portal";

interface Props {
  ping: Ping;
  onClose: () => void;
  onReroll: () => void;
  onOpenDetail: () => void;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(120, 70, 95, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
`;

const Card = styled.div`
  position: relative;
  width: min(420px, 92vw);
  background: linear-gradient(180deg, #fff, #fff3f9);
  border-radius: 32px;
  padding: 26px 26px 24px;
  box-shadow: 0 24px 60px rgba(180, 80, 120, 0.45);
  animation: popIn 0.4s cubic-bezier(0.2, 1.3, 0.5, 1) both;
  text-align: center;
`;

const Eyebrow = styled.div`
  font-family: var(--font-jua), sans-serif;
  font-size: 16px;
  color: #ff8fb8;
  letter-spacing: 1px;
`;

const ImageTile = styled.div<{ bg: string }>`
  background: ${(p) => p.bg};
  border-radius: 26px;
  padding: 22px;
  margin: 14px auto 14px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatY 3s ease-in-out infinite;
`;

const Name = styled.div`
  font-family: var(--font-jua), sans-serif;
  font-size: 32px;
  color: #ff77ab;
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const Badge = styled.span<{ bg: string; fg: string }>`
  font-size: 13px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
  background: ${(p) => p.bg};
  color: ${(p) => p.fg};
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const RerollButton = styled.button`
  cursor: pointer;
  border: none;
  font-family: var(--font-jua), sans-serif;
  font-size: 15px;
  color: #fff;
  background: linear-gradient(135deg, #ff8fb8, #ff6fa0);
  padding: 11px 22px;
  border-radius: 999px;
  box-shadow: 0 5px 14px rgba(255, 111, 160, 0.4);
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(255, 111, 160, 0.5);
  }
`;

const DetailButton = styled.button`
  cursor: pointer;
  border: 2px solid #ffc9de;
  font-family: var(--font-jua), sans-serif;
  font-size: 15px;
  color: #e87aa3;
  background: #fff;
  padding: 9px 20px;
  border-radius: 999px;
  transition: background 0.15s;

  &:hover {
    background: #fff5fa;
  }
`;

export default function TodaysModal({
  ping,
  onClose,
  onReroll,
  onOpenDetail,
}: Props) {
  const season = seasonData[ping.seasonIdx];
  const type = typeData[ping.type] ?? typeData.normal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Portal>
      <Overlay onClick={onClose}>
        <Card
          role="dialog"
          aria-modal="true"
          aria-label={`오늘의 티니핑: ${ping.name}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Eyebrow>✨ 오늘의 티니핑 ✨</Eyebrow>
          <ImageTile bg={type.tileBg}>
            <Image
              src={`/images/pings/${ping.img}.webp`}
              alt={ping.name}
              width={156}
              height={156}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </ImageTile>
          <Name>{ping.name}</Name>
          <BadgeRow>
            <Badge bg={season.badgeBg} fg={season.badgeFg}>
              {season.short} · {season.sub}
            </Badge>
            <Badge bg={type.bg} fg={type.fg}>
              {type.emoji} {type.label} 티니핑
            </Badge>
          </BadgeRow>
          <ButtonRow>
            <RerollButton onClick={onReroll}>🎲 다시 뽑기</RerollButton>
            <DetailButton onClick={onOpenDetail}>자세히</DetailButton>
          </ButtonRow>
        </Card>
      </Overlay>
    </Portal>
  );
}
