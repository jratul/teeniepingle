"use client";

import { useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Ping, seasonData, typeData } from "./constant";
import Portal from "./Portal";

interface Props {
  ping: Ping;
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(120, 70, 95, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
`;

const Card = styled.div`
  position: relative;
  width: min(440px, 92vw);
  max-height: 88vh;
  overflow-y: auto;
  background: #fff;
  border-radius: 30px;
  padding: 28px 26px 26px;
  box-shadow: 0 24px 60px rgba(180, 80, 120, 0.4);
  animation: popIn 0.32s cubic-bezier(0.2, 1.3, 0.5, 1) both;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 18px;
  cursor: pointer;
  font-size: 22px;
  color: #c98aa6;
  line-height: 1;
  border: none;
  background: transparent;
  padding: 4px;
`;

const ImageTile = styled.div<{ bg: string }>`
  background: ${(p) => p.bg};
  border-radius: 26px;
  padding: 22px;
  margin: 6px auto 16px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  font-family: var(--font-jua), sans-serif;
  font-size: 30px;
  color: #ff77ab;
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 14px;
`;

const Badge = styled.span<{ bg: string; fg: string }>`
  font-size: 13px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
  background: ${(p) => p.bg};
  color: ${(p) => p.fg};
`;

const Line = styled.p`
  margin-top: 18px;
  font-size: 14px;
  color: #9a6d82;
  font-style: italic;
  line-height: 1.5;
`;

const VideoWrap = styled.div`
  margin-top: 18px;
  border-radius: 14px;
  overflow: hidden;
`;

const Video = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  border: none;
`;

const InfoList = styled.dl`
  margin: 20px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;

const InfoLabel = styled.dt`
  flex-shrink: 0;
  width: 70px;
  font-family: var(--font-jua), sans-serif;
  font-size: 12.5px;
  color: #ff8fb8;
`;

const InfoValue = styled.dd`
  margin: 0;
  font-size: 13.5px;
  color: #5a4a52;
  white-space: pre-wrap;
  line-height: 1.5;
`;

export default function DetailModal({ ping, onClose }: Props) {
  const season = seasonData[ping.seasonIdx];
  const type = typeData[ping.type] ?? typeData.normal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  return (
    <Portal>
      <Overlay onClick={onClose}>
        <Card
          role="dialog"
          aria-modal="true"
          aria-label={ping.name}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={onClose} aria-label="닫기">
            ✕
          </CloseButton>
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
          {ping.line && (
            <Line>&ldquo;{ping.line}&rdquo;</Line>
          )}
          {ping.youtube && (
            <VideoWrap>
              <Video
                src={ping.youtube}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </VideoWrap>
          )}
          <InfoList>
            <InfoRow>
              <InfoLabel>성별</InfoLabel>
              <InfoValue>{ping.gender}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>소품</InfoLabel>
              <InfoValue>{ping.item}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>마법</InfoLabel>
              <InfoValue>{ping.skill}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>좋아하는 것</InfoLabel>
              <InfoValue>{ping.like}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>싫어하는 것</InfoLabel>
              <InfoValue>{ping.hate}</InfoValue>
            </InfoRow>
            {ping.romi && (
              <InfoRow>
                <InfoLabel>로미 변신</InfoLabel>
                <InfoValue>{ping.romi}</InfoValue>
              </InfoRow>
            )}
          </InfoList>
        </Card>
      </Overlay>
    </Portal>
  );
}
