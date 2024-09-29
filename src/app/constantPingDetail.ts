export interface PingDetail {
  line: string;
  gender: string;
  item: string;
  skill: string;
  like: string;
  hate: string;
  romi?: string;
  youtube: string;
}

export const pingDetailInfo: { [name: string]: PingDetail } = {
  꾸래핑: {
    line: "친구들을 되돌릴 수 있는 건, 나뿐이니까, 꾸래!",
    gender: "여성",
    item: "눈사람",
    skill: `<평화의 눈덩이>
눈사람으로 다양한 크기의 눈덩이를 만들 수 있다.
<평화의 크리스탈>
단단한 크리스탈 재질의 얼음으로 얼려 버린다.`,
    like: "낮잠자기, 간식타임, 추운 날, 눈 오는 날",
    hate: "다툼, 혼란한 상황",
    romi: "프린세스 크리스탈",
    youtube: "https://www.youtube.com/embed/UPFCvEgd-P8",
  },
};
