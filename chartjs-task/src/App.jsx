import React, { useState, useEffect } from 'react';
import './App.css';
import { monthlySalesData, weeklySalesData, categorySalesData } from './data/salesData';
import MonthlySalesBarChart from './components/MonthlySalesBarChart';
import WeeklyTrendLineChart from './components/WeeklyTrendLineChart';
import CategoryDoughnutChart from './components/CategoryDoughnutChart';
import Loader from './components/Loader';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Sales Dashboard</h1>
        <ThemeToggle onClick={toggleTheme} />
      </header>
      <div className="charts-container">
        <div className="chart-item">
          <h2>Monthly Sales</h2>
          <MonthlySalesBarChart data={monthlySalesData} />
        </div>
        <div className="chart-item">
          <h2>Weekly Sales Trend</h2>
          <WeeklyTrendLineChart data={weeklySalesData} />
        </div>
        <div className="chart-item">
          <h2>Sales by Category</h2>
          <CategoryDoughnutChart data={categorySalesData} />
        </div>
      </div>
    </div>
  );
};

export default App;
