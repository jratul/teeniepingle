export interface Ping {
  name: string;
  img: string;
  seasonIdx: number;
  type: string;
  line: string;
  gender: string;
  item: string;
  skill: string;
  like: string;
  hate: string;
  romi?: string;
  youtube: string;
}

export interface Season {
  seasonNum: number;
  name: string;
  color: string;
  filterKey: string;
}

export const colors: { [key: string]: string } = {
  first: "#FF69B4",
  second: "#90E7FE",
  third: "#E44C59",
  fourth: "#E1A5E6",
  fifth: "#666CD7",
  movieFirst: "#f87171",
  royal: "#d97706",
  legend: "#7c3aed",
  normal: "#16a34a",
  villain: "#334155",
};

export const pingTypeData: { [key: string]: string } = {
  normal: "일반",
  royal: "로열",
  legend: "레전드",
  villain: "빌런",
};

export const seasonData: Season[] = [
  {
    seasonNum: 1,
    name: "1기(큐브)",
    color: colors.first,
    filterKey: "first",
  },
  {
    seasonNum: 2,
    name: "2기(보석)",
    color: colors.second,
    filterKey: "second",
  },
  {
    seasonNum: 3,
    name: "3기(열쇠)",
    color: colors.third,
    filterKey: "third",
  },
  {
    seasonNum: 4,
    name: "4기(디저트)",
    color: colors.fourth,
    filterKey: "fourth",
  },
  {
    seasonNum: 5,
    name: "5기(스타)",
    color: colors.fifth,
    filterKey: "fifth",
  },
  {
    seasonNum: 6,
    name: "극장판 1기(사랑의 하츄핑)",
    color: colors.movieFirst,
    filterKey: "movieFirst",
  },
];

export const pingData: { [key: string]: Ping[] } = {
  first: [
    {
      name: "하츄핑",
      img: "https://i.namu.wiki/i/1QglAcMMQsCsbEP2u3gIlSOn9eSC5ot0ueDY3y-lyWFmms3djEAHmylc1zY-NKR8mWOwtDC4nGFD5xw9Fp77BEQ6nA-bc-8nKksOg6l1ZOVZdbop0NCeajCpmhVK9HMhOniHwk_UV9KshcOsciNzkg.webp",
      seasonIdx: 0,
      type: "royal",
      line: "친구들을 되돌릴 수 있는 건, 나뿐이니까, 꾸래!",
      gender: "여성",
      item: "눈사람",
      skill: `<평화의 눈덩이>\n눈사람으로 다양한 크기의 눈덩이를 만들 수 있다.\n<평화의 크리스탈>\n단단한 크리스탈 재질의 얼음으로 얼려 버린다.`,
      like: "낮잠자기, 간식타임, 추운 날, 눈 오는 날",
      hate: "다툼, 혼란한 상황",
      romi: "프린세스 크리스탈",
      youtube: "https://www.youtube.com/embed/UPFCvEgd-P8",
    },
    {
      name: "바로핑",
      img: "https://i.namu.wiki/i/VXTz0Z_tm0juqf1DquXBrml7UZNhzRKVH87bPfp7dSx7zmJSqbYFBF_i06ftmISECWAFjrSf0fJMTE5BhRB8sjAkYwH8F5uLWRk4lTctRk3urcq9JLhnl5hBcEpW0ySRwTU3nDD135AYmzUasKfuMg.webp",
      seasonIdx: 0,
      type: "royal",
      line: "친구들을 되돌릴 수 있는 건, 나뿐이니까, 꾸래!",
      gender: "여성",
      item: "눈사람",
      skill: `<평화의 눈덩이>
눈사람으로 다양한 크기의 눈덩이를 만들 수 있다.
<평화의 크리스탈>
단단한 크리스탈 재질의 얼음으로 얼려 버린다.`,
      like: "낮잠자기, 간식타임, 추운 날, 눈 오는 날",
      hate: "다툼, 혼란한 상황",
      youtube: "https://www.youtube.com/embed/UPFCvEgd-P8",
    },
    {
      name: "악동핑",
      img: "https://soulbrain.biz/wp-content/uploads/2023/07/%EC%95%85%EB%8F%99%ED%95%91.png",
      seasonIdx: 0,
      type: "villain",
      line: "친구들을 되돌릴 수 있는 건, 나뿐이니까, 꾸래!",
      gender: "여성",
      item: "눈사람",
      skill: `<평화의 눈덩이>
눈사람으로 다양한 크기의 눈덩이를 만들 수 있다.
<평화의 크리스탈>
단단한 크리스탈 재질의 얼음으로 얼려 버린다.`,
      like: "낮잠자기, 간식타임, 추운 날, 눈 오는 날",
      hate: "다툼, 혼란한 상황",
      youtube: "https://www.youtube.com/embed/UPFCvEgd-P8",
    },
  ],
  second: [
    {
      name: "까르핑",
      img: "https://soulbrain.biz/wp-content/uploads/2023/07/%EA%B9%8C%EB%A5%B4%ED%95%91.png",
      seasonIdx: 1,
      type: "normal",
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
    {
      name: "주네핑",
      img: "https://soulbrain.biz/wp-content/uploads/2023/07/%EC%A3%BC%EB%84%A4%ED%95%91.png",
      seasonIdx: 1,
      type: "normal",
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
  ],
  third: [
    {
      name: "꾸래핑",
      img: "https://soulbrain.biz/wp-content/uploads/2023/07/%EA%BE%B8%EB%9E%98%ED%95%91.png",
      seasonIdx: 2,
      type: "royal",
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
  ],
};
