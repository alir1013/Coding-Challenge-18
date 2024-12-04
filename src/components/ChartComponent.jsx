//Task 2: Create the Reusable ChartComponent 
import React, {useEffect,useRef} from 'react';
import Chart from 'chart.js/auto';

//Defines a functional component that accepts type, data, and options as props.
const ChartComponent = ({ type, data, options }) => {
const chartRef = useRef(null);
 //Tracks the Chart.js instance to ensure proper cleanup and avoid redundant initialization.
const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d')

//Destroying previous chart 
    if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
  }

//Creating new chart 
chartInstanceRef.current = new Chart(ctx, {
    type,
    data,
    options,
  });

  return () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }};
    
  },[type, data, options]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
