import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useGetBalanceQuery, useGetStatisticQuery } from 'redux/walletsApiServise/wallet-api';
import { getStatsResult } from 'helpers/statistics/getStatsResult';
import { drawInnerText, options } from 'helpers/statistics/doughnutOptions';

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

const Chart = () => {
  const { month, year } = useSelector(state => state.statistic);
  const { removedSum } = useSelector(state => state.transactions);
  
  const {data: stats = [] } = useGetStatisticQuery({ month, year })

  const { data: balance = {} } = useGetBalanceQuery();
  const totalBalance = balance.userBalance 
  // - removedSum 
  || 0;

  const { sum, colors, chartCategories } = getStatsResult(stats)

  const data = {
    labels: chartCategories.length > 0 ? chartCategories : ['empty'],
    datasets: [
      {
        label: '# of Votes',
        data: sum.length > 0 ? sum : ['100'],
        text: 'summ',
        backgroundColor: 
          colors.length > 0 ? colors : ['rgba(255, 99, 132, 0.2)'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Doughnut
      width={336}
      height={336}
      data={data}
      options={options}
      plugins={[{beforeDraw: (chart) => drawInnerText(chart, totalBalance)}]}
    />
  );
};

export default Chart;


