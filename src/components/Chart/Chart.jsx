import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { TitleBalance } from './Chart.styled';
import {  options } from 'helpers/statistics/doughnutOptions';
import { getChartData } from 'helpers/statistics/getChartData';
import { getStatsResult } from 'helpers/statistics/getStatsResult';
import { useGetBalanceQuery, useGetStatisticQuery } from 'redux/walletsApiServise/wallet-api';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { month, year } = useSelector(state => state.statistic);
  
  const { data: totalBalance = 0 } = useGetBalanceQuery();
  const { data: stats = [] } = useGetStatisticQuery({ month, year })

  const result = getStatsResult(stats)
  const data = getChartData(result)

  return (
    <>
      <Doughnut data={data} options={options}  />
      <TitleBalance>₴{totalBalance}</TitleBalance>
    </>
  );
};

export default Chart;