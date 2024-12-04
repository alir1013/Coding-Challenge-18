//Task 4:Fetch Data for Charts

import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {

  const [chartData, setChartData] = useState(null);

  useEffect(() => {

    fetch('public/data.json') //Loads chart data from a JSON file

      .then((response) => response.json())
      .then((data) => setChartData(data)); //Updates the state with the fetched data

  }, []);
}

  export default App;
