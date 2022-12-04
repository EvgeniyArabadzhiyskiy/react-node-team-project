import moment from 'moment';

export const getMonth = date => {
  return moment(date).format('MMMM');
};
