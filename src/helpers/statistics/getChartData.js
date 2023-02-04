export const getChartData = data => {
  const { sum, colors, chartCategories } = data;
  
  return {
    labels: chartCategories.length > 0 ? chartCategories : ['empty'],
    datasets: [
      {
        label: '# of Votes',
        data: sum.length > 0 ? sum : ['100'],
        backgroundColor:
          colors.length > 0 ? colors : ['#be2d3236'],
        borderWidth: 0,
      },
    ],
  };
};
