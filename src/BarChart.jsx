//Task 3: BarChart

//Creating Specific Chart Components 
const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(255, 179, 186, 0.2)',
          borderColor: 'rgba(255, 179, 186, 1)',
          borderWidth: 4,
        },
      ],
    };
    const barChartOptions = {
        // Configures the chart axes
        scales: {
          y: {
           // Ensures the Y-axis starts from zero for a consistent scale
            beginAtZero: true,
          },
        },
      };

      //Passes type, data, and options props to ChartComponent to render the bar chart
      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
    };

    export default BarChart;
