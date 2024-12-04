//Task 3: ScatterChart
import React from 'react';
import ChartComponent from './ChartComponent';

//Creating Specific Chart Components 
const ScatterChart = ({ data }) => {
    const scatterChartData = {
      datasets: [
        {
          label: 'Expenses vs Profits',
          data: data.expensesProfits,
          backgroundColor: 'rgba(255, 223, 186, 0.2)', 
          borderColor: 'rgba(255, 223, 186, 1)', 
          borderWidth: 4,
        },
      ],
    };
    const scatterChartOptions = {
    // Configures the chart axes
    //Displays expenses vs. profits
      scales: {
        x: {
          title: {
            display: true,
            text: 'Expenses',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Profits',
          },
        },
      },
    };
  
    //Passes type, data, and options props to ChartComponent to render the scatter chart
    return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
  };
  
  export default ScatterChart;

