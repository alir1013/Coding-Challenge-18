//Task 3: BubbleChart
import React from 'react';
import ChartComponent from './ChartComponent';

//Creating Specific Chart Components 
const BubbleChart = ({ data }) => {
    const bubbleChartData = {
      datasets: [
        {
          label: 'Sales, Profits, Expenses',
          data: data.salesProfitsExpenses,
          backgroundColor: 'rgba(186, 225, 255, 0.2)', 
          borderColor: 'rgba(186, 225, 255, 1)', 
          borderWidth: 4,
        },
      ],
    };
    const bubbleChartOptions = {
      // Configures the chart axes
      //Displays sales, profits, and expenses
      scales: {
        x: {
          title: {
            display: true,
            text: 'Sales',
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
  
    //Passes type, data, and options props to ChartComponent to render the bubble chart
    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
  };
  
  export default BubbleChart;

