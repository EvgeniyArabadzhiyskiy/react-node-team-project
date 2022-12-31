export const drawInnerText = (chart, totalBalance) => {
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

export const options = {
  cutout: '70%',
  plugins: {
    legend: {
      display: false,
    },
  },
};
