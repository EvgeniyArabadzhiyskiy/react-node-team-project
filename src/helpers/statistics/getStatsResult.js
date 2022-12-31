import { getCategoryColor } from './getCategoryColor';

export const getStatsResult = stats => {
  const expenseResults = stats.filter(result => result.type === 'expense');

  const sum = expenseResults.map(result => result.totalSum);
  const chartCategories = expenseResults.map(result => result._id);
  const colors = expenseResults.map(result => getCategoryColor(result._id));

  return { sum, colors, chartCategories };
};
