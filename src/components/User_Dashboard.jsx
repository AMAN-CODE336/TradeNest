import { useEffect, useState } from "react";
import User_sidebar from "./User_sidebar";
import { Link } from "react-router-dom";

export default function User_Dashboard() {
  const IndicesStocks = [
    { name: 'NIFTY', Symbol: 'NFTY', price: '24,346.70' },
    { name: 'SENSEX', Symbol: 'SNSX', price: '14,676.70' },
    { name: 'BANKNIFTY', Symbol: 'BKNFT', price: '42,942.10' },
  ];

  const TradedStocks = [
    { name: "Sonata Software", Symbol: "SS", Price: '₹420.65', img: "images/sonata-the-modernization-company-logo (1).png" },
    { name: "Adani Ports", Symbol: "AP", Price: '₹1200.65', img: "images/logo (1) (1).png" },
    { name: "Nippon India", Symbol: "NI", Price: '₹990.65', img: "images/amc_nippon (1).png" },
    { name: "IND Oil", Symbol: "IO", Price: '₹820.65', img: "images/Indian-oil (1).png" },
  ];

  const Topgainers = [...TradedStocks]; // Reusing the same for simplicity

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // ✅ Store all stock data in localStorage for Stockdetails page
    const stockData = {
      NFTY: { name: 'NIFTY', price: '24,346.70', history: [23000, 23500, 24000, 24346.70] },
      SNSX: { name: 'SENSEX', price: '14,676.70', history: [14000, 14200, 14400, 14676.70] },
      BKNFT: { name: 'BANKNIFTY', price: '42,942.10', history: [42000, 42500, 42800, 42942.10] },
      SS: { name: 'Sonata Software', price: '₹420.65', history: [400, 410, 415, 420.65] },
      AP: { name: 'Adani Ports', price: '₹1200.65', history: [1100, 1150, 1180, 1200.65] },
      NI: { name: 'Nippon India', price: '₹990.65', history: [950, 970, 980, 990.65] },
      IO: { name: 'IND Oil', price: '₹820.65', history: [790, 800, 810, 820.65] },
    };

    localStorage.setItem("stockData", JSON.stringify(stockData));
  }, []);

  return (
    <>
      <div className="flex h-auto bg-gray-50">
        {/* Main Content */}
        <main className="flex-1 p-10">
          <h1 className="text-2xl font-semibold text-gray-800">
            Market Insights Just for You, {user?.name || "User"}!
          </h1>
          <p className="mt-4 text-gray-600">
            Here's what the market's saying today — stay sharp, trade smart.
          </p>

          {/* Indices */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Indices</h3>
            <div className="mt-6 flex justify-around">
              {IndicesStocks.map((stock) => (
                <Link key={stock.Symbol} to={`/stocks/${stock.Symbol}`}>
                  <div className="border rounded-lg shadow-sm p-4 w-60">
                    <p className="text-sm text-black mb-1">{stock.name}</p>
                    <p className="text-lg font-medium text-gray-800">
                      {stock.price}
                      <span className="text-sm font-normal text-gray-500"> 0.00 (0.00%)</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Most Traded */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Most Traded On Site</h2>
            <div className="mt-6 flex justify-between gap-6">
              {TradedStocks.map((stock) => (
                <Link key={stock.Symbol} to={`/stocks/${stock.Symbol}`}>
                  <div className="w-[192px] h-[200px] rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center justify-between text-center">
                    <img src={stock.img} alt={stock.name} className="h-10 w-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800 mb-1">{stock.name}</p>
                    <p className="text-lg font-semibold text-gray-900">{stock.Price}</p>
                    <p className="text-sm text-red-500 font-medium">-0.90 (0.21%)</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Top Gainers */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Top Gainers</h2>
            <div className="mt-6 flex justify-between gap-6">
              {Topgainers.map((stock) => (
                <Link key={stock.Symbol} to={`/stocks/${stock.Symbol}`}>
                  <div className="w-[192px] h-[200px] rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center justify-between text-center">
                    <img src={stock.img} alt={stock.name} className="h-10 w-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800 mb-1">{stock.name}</p>
                    <p className="text-lg font-semibold text-gray-900">{stock.Price}</p>
                    <p className="text-sm text-red-500 font-medium">-0.90 (0.21%)</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-[35%] flex flex-col bg-white shadow-lg p-6 overflow-y-auto">
          <User_sidebar />
        </aside>
      </div>
    </>
  );
}
