import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Graph from './Graph';
import Stocksidebar from './Stock-sidebar';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Stockdetails() {
  const { Symbol } = useParams();
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    // ✅ Load from localStorage
    const storedStockData = localStorage.getItem('stockData');
    if (storedStockData) {
      const parsedData = JSON.parse(storedStockData);
      setStockData(parsedData[Symbol]);
    }
  }, [Symbol]);

  if (!stockData) return <p>Loading...</p>;

  const cleanPrice = stockData.price.replace(/[₹,]/g, ''); // clean ₹ and commas
  const currentPrice = parseFloat(cleanPrice);

  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Today'],
    datasets: [
      {
        label: `${stockData.name} Price`,
        data: stockData.history.map((p) => parseFloat(p.toString().replace(/[₹,]/g, ''))),
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
    ],
  };

  return (
    <>
    <div className="flex w-full">
  {/* Main Stock Content */}
  <div className="flex-grow p-6">
    <h2 className="text-2xl font-semibold mb-2">
      {stockData.name} ({Symbol})
    </h2>
    <p className="text-lg mb-4">Current Price: ₹{currentPrice}</p>
    <h3 className="text-xl font-medium mb-2">Price Chart</h3>
    <div className="w-full h-[500px]">
      {/* <Line data={chartData} /> */}
      <Graph />
    </div>
  </div>

  {/* Sidebar */}
  <div className="w-80 mt-16 p-4">
    <Stocksidebar />
  </div>
</div>

  
  
  </>
  
  );
}
