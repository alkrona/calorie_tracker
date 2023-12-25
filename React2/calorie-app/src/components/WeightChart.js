import React from 'react';
import { Line } from 'react-chartjs-2';

const WeightChart = ({ weights }) => {
  const data = {
    labels: Array.from({ length: weights.length }, (_, index) => index + 1),
    datasets: [
      {
        label: 'Weights',
        data: weights,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        min: Math.min(...weights) - 5,
        max: Math.max(...weights) + 5,
      },
    },
  };

  return (
    <div>
      <h2>Weight Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeightChart;