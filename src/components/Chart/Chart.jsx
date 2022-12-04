import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { selectAllStatistic } from 'redux/statistic/statisticSelectors';
import { useSelector } from 'react-redux';
import { getCategoryColor } from 'helpers/getCategoryColor';

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

const Chart = () => {
  const res = useSelector(selectAllStatistic);
  const { totalBalance } = useSelector(state => state.transactions);

  const expenseResults = res.statistic.filter(
    result => result.type === 'expense'
  );

  const chartCategories = expenseResults.map(result => {
    return result._id;
  });
  const sum = expenseResults.map(result => result.totalSum);

  const colors = expenseResults.map(item => getCategoryColor(item._id));

  const emptyDiagramLable = ['empty'];
  const emptyData = ['100'];

  const drawInnerText = chart => {
    const ctx = chart.ctx;
    ctx.restore();
    ctx.font = '700 18px Circe-Regular';
    ctx.textBaseline = 'middle';
    const text = `₴${totalBalance}`;
    const textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
    const textY = chart.height / 2 + chart.legend.height / 2;
    ctx.fillText(text, textX, textY);
    ctx.fillStyle = '#000000';
    ctx.save();
  };

  const data = {
    labels: chartCategories.length > 0 ? chartCategories : emptyDiagramLable,
    datasets: [
      {
        label: '# of Votes',
        data: sum.length > 0 ? sum : emptyData,
        text: 'summ',
        backgroundColor:
          colors.length > 0 ? colors : ['rgba(255, 99, 132, 0.2)'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div>
      <div style={{ maxWidth: '336px', margin: '0 auto' }}>
        <Doughnut
          width={336}
          height={336}
          data={data}
          options={{
            cutout: '70%',
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          plugins={[
            {
              beforeDraw: function (chart) {
                drawInnerText(chart);
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Chart;
