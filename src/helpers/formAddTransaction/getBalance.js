export const getBalances = (data, totalBalance) => {
  const balances = data.reduce((acc, {amount, typeOperation}, idx) => {

  return [
    ...acc, typeOperation === "expense" 
    ? acc[idx] += amount 
    : acc[idx] -= amount ]

  },[Number(totalBalance)])

  return balances
}
