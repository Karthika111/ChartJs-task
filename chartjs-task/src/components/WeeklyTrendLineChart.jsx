// src/components/WeeklyTrendLineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary components
ChartJS.register(Title, Tooltip, LineElement, PointElement, CategoryScale, LinearScale);

const WeeklyTrendLineChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.week),
    datasets: [
      {
        label: 'Weekly Sales Trend',
        data: data.map(item => item.sales),
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      }
    ]
  };

  return <Line data={chartData} options={{ responsive: true }} />;
};

export default WeeklyTrendLineChart;
