//Task 4:Fetch Data for Charts
import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import ScatterChart from './ScatterChart';
import BubbleChart from './BubbleChart';

const App = () => {

  const [chartData, setChartData] = useState(null);

  useEffect(() => {

    fetch('/financial_data.json') //Loads chart data from a JSON file

      .then((response) => response.json())
      .then((data) => setChartData(data)); //Updates the state with the fetched data

  }, []);

//Task 5: Render Charts in the App

  //Displays a loading message while the chartData is being fetched
  if (!chartData) {
    return <div>Page is Loading...</div>; 
  }

  return (

    <div style={{ textAlign: 'center' }}>

      <h1>Dynamic Chart Dashboard </h1>
      
      {/* Renders each chart component, passing chartData as the data prop */}
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
};

export default App;

