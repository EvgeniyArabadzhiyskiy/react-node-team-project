export const onChangeType = value => {
  switch (value) {
    case true:
      return 'income';

    case false:
      return 'expense';

    default:
      console.log('No such operation');
  }
};
