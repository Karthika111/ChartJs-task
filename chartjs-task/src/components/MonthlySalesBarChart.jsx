// src/components/MonthlySalesBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

const MonthlySalesBarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Monthly Sales',
        data: data.map(item => item.sales),
        backgroundColor: 'peach',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  };

  return <Bar data={chartData} options={{ responsive: true }} />;
};

export default MonthlySalesBarChart;
