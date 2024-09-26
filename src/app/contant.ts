export interface Ping {
  name: string;
  img: string;
  seasonNum: number;
  type: string;
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

export const pingTypeInfo: { [key: string]: string } = {
  royal: "로열",
  legend: "레전드",
  villain: "빌런",
};

export const seasonInfo: Season[] = [
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

export const pingInfo: { [key: string]: Ping[] } = {
  first: [
    {
      name: "하츄핑",
      img: "https://i.namu.wiki/i/1QglAcMMQsCsbEP2u3gIlSOn9eSC5ot0ueDY3y-lyWFmms3djEAHmylc1zY-NKR8mWOwtDC4nGFD5xw9Fp77BEQ6nA-bc-8nKksOg6l1ZOVZdbop0NCeajCpmhVK9HMhOniHwk_UV9KshcOsciNzkg.webp",
      seasonNum: 1,
      type: "royal",
    },
    {
      name: "바로핑",
      img: "https://i.namu.wiki/i/VXTz0Z_tm0juqf1DquXBrml7UZNhzRKVH87bPfp7dSx7zmJSqbYFBF_i06ftmISECWAFjrSf0fJMTE5BhRB8sjAkYwH8F5uLWRk4lTctRk3urcq9JLhnl5hBcEpW0ySRwTU3nDD135AYmzUasKfuMg.webp",
      seasonNum: 1,
      type: "royal",
    },
    {
      name: "악동핑",
      img: "https://soulbrain.biz/wp-content/uploads/2023/07/%EC%95%85%EB%8F%99%ED%95%91.png",
      seasonNum: 1,
      type: "villain",
    },
  ],
  second: [
    {
      name: "까르핑",
      img: "https://soulbrain.biz/wp-content/uploads/2023/07/%EA%B9%8C%EB%A5%B4%ED%95%91.png",
      seasonNum: 2,
      type: "normal",
    },
    {
      name: "주네핑",
      img: "https://15.164.84.103/wp-content/uploads/2023/07/%EC%A3%BC%EB%84%A4%ED%95%91.png",
      seasonNum: 2,
      type: "normal",
    },
  ],
  third: [
    {
      name: "꾸래핑",
      img: "https://soulbrain.biz/wp-content/uploads/2023/07/%EA%BE%B8%EB%9E%98%ED%95%91.png",
      seasonNum: 3,
      type: "royal",
    },
  ],
};
