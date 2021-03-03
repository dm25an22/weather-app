let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function getWeekDay(date) {
  return days[date.getDay()];
}

export function getTime(date) {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour > 9 ? hour : `0${hour}`}:${minutes > 9 ? minutes : `0${minutes}`}`
}