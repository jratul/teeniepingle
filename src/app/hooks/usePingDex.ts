"use client";

import { useMemo, useState } from "react";
import { pingData, seasonData, Ping } from "../constant";
import { colorBuckets } from "../colorBuckets";
import { CHO, chosung } from "../utils/chosung";

export type SortKey = "season" | "name";

export interface PingGroup {
  anchor: string;
  title: string;
  count: number;
  items: Ping[];
}

const ALL_PINGS: Ping[] = (
  Object.values(pingData) as Ping[][]
).flat();

export function usePingDex() {
  const [q, setQ] = useState("");
  const [season, setSeason] = useState("all");
  const [type, setType] = useState("all");
  const [color, setColor] = useState("all");
  const [sort, setSort] = useState<SortKey>("season");
  const [detail, setDetail] = useState<Ping | null>(null);
  const [todays, setTodays] = useState<Ping | null>(null);

  const filtered = useMemo(() => {
    const ql = q.trim();
    return ALL_PINGS.filter((p) => {
      if (season !== "all" && seasonData[p.seasonIdx].filterKey !== season)
        return false;
      if (type !== "all" && p.type !== type) return false;
      if (color !== "all" && colorBuckets[p.img] !== color) return false;
      if (ql && !p.name.includes(ql)) return false;
      return true;
    });
  }, [q, season, type, color]);

  const groups = useMemo<PingGroup[]>(() => {
    if (sort === "name") {
      const sorted = [...filtered].sort((a, b) =>
        a.name.localeCompare(b.name, "ko")
      );
      const map = new Map<string, Ping[]>();
      sorted.forEach((p) => {
        const c = chosung(p.name);
        const arr = map.get(c) ?? [];
        arr.push(p);
        map.set(c, arr);
      });
      const result: PingGroup[] = [];
      [...CHO, "?"].forEach((c) => {
        const items = map.get(c);
        if (items?.length) {
          result.push({ anchor: c, title: c, count: items.length, items });
        }
      });
      return result;
    }

    return seasonData
      .map((s) => {
        const items = filtered.filter((p) => p.seasonIdx === s.seasonIdx);
        return items.length
          ? {
              anchor: s.filterKey,
              title: `${s.emoji} ${s.short}(${s.sub})`,
              count: items.length,
              items,
            }
          : null;
      })
      .filter((g): g is PingGroup => g !== null);
  }, [filtered, sort]);

  const resultCount = filtered.length;
  const showJump = sort === "name" && groups.length > 0;

  const openDetail = (ping: Ping) => {
    setDetail(ping);
    setTodays(null);
    window.history.pushState({}, "");
  };
  const closeDetail = () => setDetail(null);

  const openRandom = () => {
    const r = ALL_PINGS[Math.floor(Math.random() * ALL_PINGS.length)];
    setTodays(r);
    setDetail(null);
  };
  const closeTodays = () => setTodays(null);
  const openDetailFromTodays = () => {
    if (todays) {
      setDetail(todays);
      setTodays(null);
    }
  };

  const resetAll = () => {
    setQ("");
    setSeason("all");
    setType("all");
    setColor("all");
  };

  return {
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
  };
}
