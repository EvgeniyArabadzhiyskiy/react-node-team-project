import moment from 'moment';

export const checksFutureDate = visibleDatesInCalendar => {
  const today = moment().subtract(0, 'day');
  return visibleDatesInCalendar.isBefore(today);
};
