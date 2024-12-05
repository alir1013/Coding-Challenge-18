//Task 3: LineChart
import React from 'react';
import ChartComponent from './ChartComponent';

//Creating Specific Chart Components 
const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Profits',
          data: data.profits,
          backgroundColor: 'rgba(186, 255, 201, 0.2)',
          borderColor: 'rgba(186, 255, 201, 1)',
          borderWidth: 4,
        },
      ],
    };
    const lineChartOptions = {
        // Configures the chart axes
        scales: {
          y: {
           // Ensures the Y-axis starts from zero for a consistent scale
            beginAtZero: true,
          },
        },
      };

      //Passes type, data, and options props to ChartComponent to render the line chart
      return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
 
    };

    export default LineChart;
