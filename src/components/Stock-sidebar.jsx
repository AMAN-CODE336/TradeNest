
import React from 'react';

const sensexData = [
  { name: 'SENSEX 80700 Call', price: '₹0.05', change: '-99.98%' },
  { name: 'SENSEX 80600 Put', price: '₹0.10', change: '-99.93%' },
  { name: 'SENSEX 80600 Call', price: '₹42.20', change: '-87.61%' },
  { name: 'SENSEX 80500 Put', price: '₹0.05', change: '-99.96%' },
  { name: 'SENSEX 80700 Put', price: '₹58.50', change: '-66.87%' },
];

export default function Stocksidebar () {
  return (
    <div className="w-72 bg-white shadow-lg rounded-md p-4 border">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2">Top Bse Sensex Options</h2>
      <ul>
        {sensexData.map((item, index) => (
          <li key={index} className="flex justify-between py-2 border-b last:border-b-0">
            <div className="text-sm font-medium">{item.name}</div>
            <div className="text-right">
              <div className="text-sm font-semibold">{item.price}</div>
              <div className="text-xs text-red-600">{item.change}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
