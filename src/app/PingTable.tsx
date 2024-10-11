import styled from "@emotion/styled";
import { colors, Ping, pingTypeData, seasonData } from "./contant";

const Table = styled.table`
  margin: 0.5rem auto;
`;

const TitleCell = styled.td`
  text-align: center;
  background: #f472b6;
  color: white;
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  min-width: 7rem;
`;

const ContentCell = styled.td<{ color?: string }>`
  color: ${(props) => props.color ?? "black"};
  width: 100%;
  padding: 0.5rem 1rem;
  font-weight: 500;
  background: #f8fafc;
  white-space: pre-wrap;
`;

export default function PingTable({ pingInfo }: { pingInfo: Ping }) {
  return (
    <Table>
      <tr>
        <TitleCell>이름</TitleCell>
        <ContentCell>{pingInfo.name}</ContentCell>
      </tr>
      <tr>
        <TitleCell>시즌</TitleCell>
        <ContentCell color={seasonData[pingInfo.seasonIdx].color}>
          {seasonData[pingInfo.seasonIdx].name}
        </ContentCell>
      </tr>
      <tr>
        <TitleCell>분류</TitleCell>
        <ContentCell color={colors[pingInfo.type]}>{`${
          pingTypeData[pingInfo.type]
        } 티니핑`}</ContentCell>
      </tr>
      <tr>
        <TitleCell>성별</TitleCell>
        <ContentCell>{pingInfo.gender}</ContentCell>
      </tr>
      <tr>
        <TitleCell>소품</TitleCell>
        <ContentCell>{pingInfo.item}</ContentCell>
      </tr>
      <tr>
        <TitleCell>마법</TitleCell>
        <ContentCell>{pingInfo.skill}</ContentCell>
      </tr>
      <tr>
        <TitleCell>좋아하는 것</TitleCell>
        <ContentCell>{pingInfo.like}</ContentCell>
      </tr>
      <tr>
        <TitleCell>싫어하는 것</TitleCell>
        <ContentCell>{pingInfo.hate}</ContentCell>
      </tr>
      {pingInfo.romi && (
        <tr>
          <TitleCell>로미와 변신</TitleCell>
          <ContentCell>{pingInfo.romi}</ContentCell>
        </tr>
      )}
    </Table>
  );
}
