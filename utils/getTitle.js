const arr=[
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const getTitle = (day, month) => {
  return day + ' ' + arr[Number(month) - 1]
}
