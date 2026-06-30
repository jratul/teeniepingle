"use client";

import styled from "@emotion/styled";
import {
  seasonData,
  typeData,
  colorBucketData,
  ColorBucket,
} from "./constant";
import { SortKey } from "./hooks/usePingDex";

interface Props {
  season: string;
  type: string;
  color: string;
  sort: SortKey;
  resultCount: number;
  onSeasonChange: (key: string) => void;
  onTypeChange: (key: string) => void;
  onColorChange: (key: string) => void;
  onSortChange: (key: SortKey) => void;
}

const Panel = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 18px 18px 20px;
  box-shadow: 0 4px 16px rgba(255, 150, 190, 0.12);
  margin-bottom: 18px;
`;

const SectionLabel = styled.div<{ spaced?: boolean }>`
  font-family: var(--font-jua), sans-serif;
  font-size: 15px;
  color: #b07c92;
  margin-bottom: 10px;
  margin-top: ${(p) => (p.spaced ? "16px" : "0")};
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button<{
  active: boolean;
  bg: string;
  fg: string;
  chipborder: string;
}>`
  cursor: pointer;
  font-family: var(--font-jua), sans-serif;
  font-size: 13.5px;
  padding: 8px 15px;
  border-radius: 999px;
  transition: all 0.12s;
  background: ${(p) => (p.active ? p.bg : "#fff")};
  color: ${(p) => (p.active ? "#fff" : p.fg)};
  border: 2px solid ${(p) => (p.active ? "transparent" : p.chipborder)};
  box-shadow: ${(p) => (p.active ? `0 4px 10px ${p.bg}66` : "none")};
`;

const ColorRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  align-items: center;
`;

const ColorDot = styled.button<{
  active: boolean;
  swatch: string;
  ring: string;
  iswhite: boolean;
}>`
  cursor: pointer;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  flex-shrink: 0;
  padding: 0;
  transition: all 0.14s;
  background: ${(p) => p.swatch};
  border: ${(p) => (p.iswhite ? "2px solid #f0d6e4" : "none")};
  box-shadow: ${(p) =>
    p.active
      ? `0 0 0 3px #fff, 0 0 0 6px ${p.ring}`
      : "0 2px 6px rgba(0,0,0,.12)"};
  transform: ${(p) => (p.active ? "scale(1.12)" : "scale(1)")};
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1.5px dashed #ffd8e6;
  flex-wrap: wrap;
`;

const SortGroup = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const SortLabel = styled.span`
  font-size: 13px;
  color: #b07c92;
  font-weight: 700;
`;

const Count = styled.div`
  font-family: var(--font-jua), sans-serif;
  font-size: 14px;
  color: #ff8fb8;
`;

const ALL = { bg: "#ff8fb8", fg: "#e87aa3", border: "#ffd0e0" };
const COLOR_ORDER: ColorBucket[] = [
  "pink",
  "yellow",
  "green",
  "blue",
  "purple",
  "white",
];

export default function FilterPanel({
  season,
  type,
  color,
  sort,
  resultCount,
  onSeasonChange,
  onTypeChange,
  onColorChange,
  onSortChange,
}: Props) {
  return (
    <Panel>
      <SectionLabel>📚 시즌</SectionLabel>
      <ChipRow>
        <Chip
          active={season === "all"}
          bg={ALL.bg}
          fg={ALL.fg}
          chipborder={ALL.border}
          onClick={() => onSeasonChange("all")}
        >
          전체
        </Chip>
        {seasonData.map((s) => (
          <Chip
            key={s.filterKey}
            active={season === s.filterKey}
            bg={s.badgeFg}
            fg={s.badgeFg}
            chipborder={s.badgeBg}
            onClick={() => onSeasonChange(s.filterKey)}
          >
            {s.emoji} {s.short}
          </Chip>
        ))}
      </ChipRow>

      <SectionLabel spaced>✨ 타입</SectionLabel>
      <ChipRow>
        <Chip
          active={type === "all"}
          bg={ALL.bg}
          fg={ALL.fg}
          chipborder={ALL.border}
          onClick={() => onTypeChange("all")}
        >
          전체
        </Chip>
        {Object.entries(typeData).map(([key, meta]) => (
          <Chip
            key={key}
            active={type === key}
            bg={meta.fg}
            fg={meta.fg}
            chipborder={meta.bg}
            onClick={() => onTypeChange(key)}
          >
            {meta.emoji} {meta.label}
          </Chip>
        ))}
      </ChipRow>

      <SectionLabel spaced>🎨 색깔로 찾기</SectionLabel>
      <ColorRow>
        <ColorDot
          active={color === "all"}
          swatch="linear-gradient(135deg,#ff8fb8,#8fc1ff,#c5a3ff)"
          ring="#ff8fb8"
          iswhite={false}
          title="전체"
          aria-label="전체 색상"
          aria-pressed={color === "all"}
          onClick={() => onColorChange("all")}
        />
        {COLOR_ORDER.map((key) => {
          const meta = colorBucketData[key];
          return (
            <ColorDot
              key={key}
              active={color === key}
              swatch={meta.swatch}
              ring={key === "white" ? "#e8b6cf" : meta.swatch}
              iswhite={key === "white"}
              title={meta.label}
              aria-label={meta.label}
              aria-pressed={color === key}
              onClick={() => onColorChange(key)}
            />
          );
        })}
      </ColorRow>

      <Divider>
        <SortGroup>
          <SortLabel>정렬</SortLabel>
          <Chip
            active={sort === "season"}
            bg="#c58ad6"
            fg="#a87bbf"
            chipborder="#e6d4ef"
            onClick={() => onSortChange("season")}
          >
            시즌순
          </Chip>
          <Chip
            active={sort === "name"}
            bg="#c58ad6"
            fg="#a87bbf"
            chipborder="#e6d4ef"
            onClick={() => onSortChange("name")}
          >
            가나다순
          </Chip>
        </SortGroup>
        <Count>총 {resultCount}마리</Count>
      </Divider>
    </Panel>
  );
}
