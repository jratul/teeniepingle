import styled from "@emotion/styled";
import { PingDetail } from "./constantPingDetail";

const Table = styled.table`
  margin: 0.5rem 0;
`;

const TitleCell = styled.td`
  text-align: center;
  background: #f472b6;
  color: white;
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  min-width: 5rem;
`;

const ContentCell = styled.td`
  padding-left: 1rem;
`;

export default function PingTable({ pingDetail }: { pingDetail: PingDetail }) {
  return (
    <Table>
      <tr>
        <TitleCell>분류</TitleCell>
        <ContentCell>{pingDetail.gender}</ContentCell>
      </tr>
      <tr>
        <TitleCell>성별</TitleCell>
        <ContentCell>{pingDetail.gender}</ContentCell>
      </tr>
      <tr>
        <TitleCell>소품</TitleCell>
        <ContentCell>{pingDetail.item}</ContentCell>
      </tr>
      <tr>
        <TitleCell>마법</TitleCell>
        <ContentCell>{pingDetail.skill}</ContentCell>
      </tr>
      <tr>
        <TitleCell>좋아하는 것</TitleCell>
        <ContentCell>{pingDetail.like}</ContentCell>
      </tr>
      <tr>
        <TitleCell>싫어하는 것</TitleCell>
        <ContentCell>{pingDetail.hate}</ContentCell>
      </tr>
      {pingDetail.romi && (
        <tr>
          <TitleCell>로미와 변신</TitleCell>
          <ContentCell>{pingDetail.romi}</ContentCell>
        </tr>
      )}
    </Table>
  );
}
