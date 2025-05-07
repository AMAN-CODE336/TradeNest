import { FiPlusCircle } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function User_sidebar() {
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Load watchlist from localStorage
    const storedWatchlist = localStorage.getItem("watchlist");
    if (storedWatchlist) {
      try {
        const parsedWatchlist = JSON.parse(storedWatchlist);
        setWatchlist(parsedWatchlist);
      } catch (error) {
        console.error("Error parsing watchlist:", error);
        setWatchlist([]); // Fallback to empty watchlist
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const storedWatchlist = localStorage.getItem("watchlist");
      if (storedWatchlist) {
        try {
          const parsedWatchlist = JSON.parse(storedWatchlist);
          // Only update if changed
          if (JSON.stringify(parsedWatchlist) !== JSON.stringify(watchlist)) {
            setWatchlist(parsedWatchlist);
          }
        } catch (error) {
          console.error("Error parsing watchlist during polling:", error);
        }
      }
    }, 1000); // Poll every second
  
    return () => clearInterval(interval);
  }, [watchlist]);

  const addToWatchlist = (stock) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = [...prevWatchlist, stock];
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  const removeFromWatchlist = (indexToRemove) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = prevWatchlist.filter((_, index) => index !== indexToRemove);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  return (
    <div className="min-h-screen">
      {/* Your Investments */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Investments</h2>
          <a href="#" className="text-sm text-green-600 font-medium hover:underline">
            Dashboard
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl border p-5 flex justify-between">
          <div>
            <p className="text-xl font-bold">₹0</p>
            <p className="text-sm text-gray-500">Total Returns</p>
          </div>
          <div>
            <p className="text-xl font-bold">₹0</p>
            <p className="text-sm text-gray-500">Current Value</p>
          </div>
        </div>
      </div>

      {/* Watchlist Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">All Watchlists</h2>
          <a href="#" className="text-sm text-green-600 font-medium hover:underline">
            View all
          </a>
        </div>

        <div className="space-y-3">
          {/* Dynamically render the watchlist */}
          {watchlist.length > 0 ? (
            watchlist.map((stock, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border p-4 flex items-center justify-between hover:bg-green-50 transition"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={stock.img}
                    alt={`${stock.name} logo`}
                    className="w-10 h-10 rounded-full object-contain"
                  />
                  <div>
                    <p className="font-medium">{stock.name}</p>
                    <p className="text-sm text-gray-500">{stock.symbol || stock.Symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-700">{stock.price || stock.price}</p>
                </div>

                <button
                  className="text-xs text-red-500 hover:underline mt-1"
                  onClick={() => removeFromWatchlist(index)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No stocks in watchlist</p>
          )}

          {/* Create New Watchlist */}
          <button
            className="w-full bg-white border rounded-xl p-4 flex items-center justify-center text-green-600 hover:bg-green-50"
            onClick={() => addToWatchlist({ name: "New Stock", symbol: "XYZ" })} // Example
          >
            <FiPlusCircle className="mr-2" />
            Create new watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
