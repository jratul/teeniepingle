"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Filter from "./Filter";
import { pingInfo, seasonInfo, Ping } from "./contantBase";
import SeasonFrame from "./SeasonFrame";
import { useFilterStore } from "./store/filterStore";

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 10px;
  
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const SearchInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

export default function Home() {
  const { filter } = useFilterStore();
  const [searchName, setSearchName] = useState<string>("");
  const [filteredPingInfo, setFilteredPingInfo] =
    useState<typeof pingInfo>(pingInfo);

  useEffect(() => {
    setFilteredPingInfo(() => {
      const newPingInfo: typeof pingInfo = {};

      Object.keys(pingInfo).map((season) => {
        newPingInfo[season] = [];

        pingInfo[season].map((pingItem) => {
          if (
            filter[pingItem.type].checked &&
            (!searchName || pingItem.name.includes(searchName))
          ) {
            newPingInfo[season].push(pingItem);
          }
        });
      });

      return newPingInfo;
    });
  }, [filter, searchName]);

  return (
    <Container>
      <div>
        <h1>티니핑글</h1>
        <p>당신의 티니핑을 찾아보세요</p>
        <SearchInput
          type="text"
          value={searchName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchName(event.target.value);
          }}
          placeholder="이름으로 찾기"
        />
        <Filter />
        {seasonInfo.map(
          (season) =>
            filter[season.filterKey]?.checked &&
            filteredPingInfo[season.filterKey] &&
            filteredPingInfo[season.filterKey]?.length > 0 && (
              <SeasonFrame
                key={season.seasonNum}
                seasonNum={season.seasonNum}
                color={season.color}
                name={season.name}
                filterKey={season.filterKey}
                pingList={filteredPingInfo[season.filterKey] ?? []}
              />
            )
        )}
      </div>
    </Container>
  );
}
