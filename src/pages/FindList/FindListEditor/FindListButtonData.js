import PeopleBox from './PeopleBox';
import PriceBox from './PriceBox';
import StayBox from './StayBox';
import ThemeBox from './ThemeBox';

export const FindListButtonData = [
  {
    id: 1,
    value: '인원',
    component: <PeopleBox />,
  },
  {
    id: 2,
    value: '가격 범위',
    component: <PriceBox />,
  },
  {
    id: 3,
    value: '스테이 유형',
    component: <StayBox />,
  },
  {
    id: 4,
    value: '테마',
    component: <ThemeBox />,
  },
];
