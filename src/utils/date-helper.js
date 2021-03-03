let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function getWeekDay(date) {
  return days[date.getDay()];
}