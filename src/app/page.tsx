"use client";

import { useCallback } from "react";
import styled from "@emotion/styled";
import { usePingDex } from "./hooks/usePingDex";
import Header from "./Header";
import FilterPanel from "./FilterPanel";
import JumpBar from "./JumpBar";
import ResultGroup from "./ResultGroup";
import EmptyState from "./EmptyState";
import DetailModal from "./DetailModal";
import TodaysModal from "./TodaysModal";

const PageWrap = styled.div`
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4px 16px 60px;
`;

export default function Home() {
  const {
    q,
    setQ,
    season,
    setSeason,
    type,
    setType,
    color,
    setColor,
    sort,
    setSort,
    groups,
    resultCount,
    showJump,
    detail,
    todays,
    openDetail,
    closeDetail,
    openRandom,
    closeTodays,
    openDetailFromTodays,
    resetAll,
  } = usePingDex();

  const handleJump = useCallback((anchor: string) => {
    const el = document.querySelector(`[data-anchor="${anchor}"]`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 184;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <PageWrap>
      <Header
        q={q}
        onSearch={setQ}
        onClearSearch={() => setQ("")}
        onOpenRandom={openRandom}
      />
      <Content>
        <FilterPanel
          season={season}
          type={type}
          color={color}
          sort={sort}
          resultCount={resultCount}
          onSeasonChange={setSeason}
          onTypeChange={setType}
          onColorChange={setColor}
          onSortChange={setSort}
        />
        {showJump && (
          <JumpBar
            anchors={groups.map((g) => g.anchor)}
            onJump={handleJump}
          />
        )}
        {groups.length > 0 ? (
          groups.map((group, index) => (
            <ResultGroup
              key={group.anchor}
              group={group}
              isFirstGroup={index === 0}
              onOpenDetail={openDetail}
            />
          ))
        ) : (
          <EmptyState onReset={resetAll} />
        )}
      </Content>
      {detail && <DetailModal ping={detail} onClose={closeDetail} />}
      {todays && (
        <TodaysModal
          ping={todays}
          onClose={closeTodays}
          onReroll={openRandom}
          onOpenDetail={openDetailFromTodays}
        />
      )}
    </PageWrap>
  );
}
