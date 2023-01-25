export const getRemovedAmount = (typeOperation, amount) => {
  switch (typeOperation) {
    case 'income':
      return amount;

    case 'expense':
      return -amount;

    default:
      return;
  }
};
