import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = ({ data }) => {
  if (!data || data.length === 0) return <div>Loading...</div>;

  const chartData = {
    labels: data.map((d) => new Date(d.time).toLocaleTimeString()),
    datasets: [
      {
        label: 'Price',
        data: data.map((d) => d.close),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true
      }
    ]
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
