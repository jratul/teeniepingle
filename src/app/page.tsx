"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Filter from "./Filter";
import { pingData, seasonData } from "./contant";
import SeasonFrame from "./SeasonFrame";
import { useFilterStore } from "./store/filterStore";
import Flex from "./Flex";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;  
  @media (min-width: 768px) {
    width: 768px;
  }
`;

const SearchInput = styled.input`
  margin: 10px 0;
`;

const HighlightSpan = styled.span`
  color:#fb7185;
  font-weight: bold;
`;
const Title = styled.div`
  font-size: 16px;
  @media (min-width:768px) {
    font-size: 24px;
  }
`;

const SubTitle = styled.p`
  font-size: 10px;
  @media (min-width:768px) {
    font-size: 16px;
  }
`;

export default function Home() {
  const { filterGroup: filter } = useFilterStore();
  const [searchName, setSearchName] = useState<string>("");
  const [filteredPingInfo, setFilteredPingInfo] =
    useState<typeof pingData>(pingData);

  useEffect(() => {
    setFilteredPingInfo(() => {
      const newPingInfo: typeof pingData = {};

      Object.keys(pingData).map((season) => {
        newPingInfo[season] = [];

        pingData[season].map((pingItem) => {
          if (
            filter.type[pingItem.type].checked &&
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
      <Flex justify="space-between" align="center">
        <Flex direction="column">
          <Title>
            <HighlightSpan>티니핑글</HighlightSpan>
          </Title>
          <SubTitle>
            당신의 <HighlightSpan>티니핑</HighlightSpan>을 찾아보세요
          </SubTitle>
        </Flex>
        <SearchInput
          type="text"
          value={searchName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchName(event.target.value);
          }}
          placeholder="이름으로 찾기"
        />
      </Flex>
      <Filter />
      {seasonData.map(
        (season) =>
          filter.season[season.filterKey]?.checked &&
          filteredPingInfo[season.filterKey] &&
          filteredPingInfo[season.filterKey]?.length > 0 && (
            <SeasonFrame
              key={season.seasonIdx}
              seasonIdx={season.seasonIdx}
              color={season.color}
              name={season.name}
              filterKey={season.filterKey}
              pingList={filteredPingInfo[season.filterKey] ?? []}
            />
          )
      )}
    </Container>
  );
}
