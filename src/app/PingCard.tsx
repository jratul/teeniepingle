"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { Ping, seasonData, typeData } from "./constant";

interface Props {
  ping: Ping;
  priority?: boolean;
  onClick: () => void;
}

const Card = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  background: #fff;
  border: none;
  border-radius: 22px;
  padding: 12px 10px;
  box-shadow: 0 4px 14px rgba(255, 150, 190, 0.14);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(255, 150, 190, 0.3);
  }
`;

const ImageTile = styled.div<{ bg: string }>`
  background: ${(p) => p.bg};
  border-radius: 18px;
  padding: 10px;
  margin-bottom: 9px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  font-family: var(--font-jua), sans-serif;
  font-size: 16px;
  color: #5a4a52;
  line-height: 1.2;
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Badge = styled.span<{ bg: string; fg: string }>`
  font-size: 11px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 999px;
  background: ${(p) => p.bg};
  color: ${(p) => p.fg};
`;

export default function PingCard({ ping, priority = false, onClick }: Props) {
  const season = seasonData[ping.seasonIdx];
  const type = typeData[ping.type] ?? typeData.normal;

  return (
    <Card onClick={onClick}>
      <ImageTile bg={type.tileBg}>
        <Image
          src={`/images/pings/${ping.img}.webp`}
          alt={ping.name}
          width={142}
          height={142}
          priority={priority}
          sizes="(max-width: 768px) 40vw, 142px"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </ImageTile>
      <Name>{ping.name}</Name>
      <BadgeRow>
        <Badge bg={season.badgeBg} fg={season.badgeFg}>
          {season.short}
        </Badge>
        <Badge bg={type.bg} fg={type.fg}>
          {type.emoji} {type.label}
        </Badge>
      </BadgeRow>
    </Card>
  );
}
