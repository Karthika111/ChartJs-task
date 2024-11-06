// src/components/CategoryDoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, ArcElement, CategoryScale, Legend } from 'chart.js';

ChartJS.register(Title, Tooltip, ArcElement, CategoryScale, Legend);

const CategoryDoughnutChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.category),
    datasets: [
      {
        label: 'Sales by Category',
        data: data.map(item => item.sales),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6F61'],
        borderColor: '#fff',
        borderWidth: 1
      }
    ]
  };

  return <Doughnut data={chartData} options={{ responsive: true }} />;
};

export default CategoryDoughnutChart;
