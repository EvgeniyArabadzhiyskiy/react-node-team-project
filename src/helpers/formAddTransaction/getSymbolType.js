export const getSymbolType = type => {
  switch (type) {
    case 'income':
      return '+';

    case 'expense':
      return '-';

    default:
      console.log('No such type');
  }
};
