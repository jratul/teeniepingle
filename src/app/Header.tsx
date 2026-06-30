"use client";

import styled from "@emotion/styled";

const Wrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 30;
  background: linear-gradient(
    180deg,
    #ffe3ef 0%,
    #fff0f6 80%,
    rgba(255, 245, 250, 0) 100%
  );
  padding: 18px 16px 22px;
  backdrop-filter: blur(2px);
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WiggleEmoji = styled.span`
  font-size: 30px;
  display: inline-block;
  animation: wiggle 2.6s ease-in-out infinite;
`;

const Title = styled.div`
  font-family: var(--font-jua), sans-serif;
  font-size: 27px;
  color: #ff77ab;
  line-height: 1;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.div`
  font-size: 12.5px;
  color: #c98aa6;
  margin-top: 3px;
`;

const RandomButton = styled.button`
  cursor: pointer;
  border: none;
  font-family: var(--font-jua), sans-serif;
  font-size: 15px;
  color: #fff;
  background: linear-gradient(135deg, #ff8fb8, #ff6fa0);
  padding: 11px 18px;
  border-radius: 999px;
  box-shadow: 0 5px 14px rgba(255, 111, 160, 0.4);
  display: flex;
  align-items: center;
  gap: 7px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(255, 111, 160, 0.5);
  }
`;

const SearchBar = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 2.5px solid #ffc9de;
  border-radius: 999px;
  padding: 12px 18px;
  box-shadow: 0 4px 14px rgba(255, 150, 190, 0.16);
`;

const SearchIcon = styled.span`
  font-size: 18px;
  line-height: 1;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-family: var(--font-noto-sans-kr), sans-serif;
  font-size: 16px;
  color: #5a4a52;
  background: transparent;
  min-width: 0;
`;

const ClearButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  color: #c98aa6;
  line-height: 1;
  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;
`;

interface Props {
  q: string;
  onSearch: (value: string) => void;
  onClearSearch: () => void;
  onOpenRandom: () => void;
}

export default function Header({
  q,
  onSearch,
  onClearSearch,
  onOpenRandom,
}: Props) {
  return (
    <Wrap>
      <Inner>
        <TopRow>
          <TitleArea>
            <WiggleEmoji aria-hidden="true">🩷</WiggleEmoji>
            <div>
              <Title>티니핑 도감</Title>
              <Subtitle>당신의 티니핑을 찾아보세요</Subtitle>
            </div>
          </TitleArea>
          <RandomButton onClick={onOpenRandom}>🎀 오늘의 티니핑</RandomButton>
        </TopRow>
        <SearchBar>
          <SearchIcon aria-hidden="true">🔍</SearchIcon>
          <SearchInput
            value={q}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="티니핑 이름으로 검색…"
            aria-label="티니핑 이름 검색"
          />
          {q && (
            <ClearButton onClick={onClearSearch} aria-label="검색어 지우기">
              ✕
            </ClearButton>
          )}
        </SearchBar>
      </Inner>
    </Wrap>
  );
}
