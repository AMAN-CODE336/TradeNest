import { useEffect, useState } from "react"
import User_sidebar from "./User_sidebar"
import { Link } from "react-router-dom"
import { FiPlusCircle } from "react-icons/fi" // ✅ Added for plus icon

export default function User_Dashboard (){

  const IncidesStocks = [
    { name: 'NIFTY', Symbol: 'NFTY', price: '24,346.70'  },
    { name: 'SENSEX', Symbol: 'SNSX', price: '14,676.70' },
    { name: 'BANKNIFTY', Symbol: 'BKNFT', price: '42,942.10' },
  ];

  const TradedStocks = [
    { name :  "Sonata Software" ,Symbol : "SS" , Price : '₹420.65' , img : "images/sonata-the-modernization-company-logo (1).png"  },
    { name :  "Adani Ports" , Symbol : "AP" , Price : '₹1200.65' , img : "images/logo (1) (1).png"  },
    { name :  "Nippon India" , Symbol : "NI" ,Price : '₹990.65' , img : "images/amc_nippon (1).png"  },
    { name :  "IND Oil" , Symbol : "IO" , Price : '₹820.65' , img : "images/Indian-oil (1).png"  },
  ]

  const Topgainers = [
    { name :  "Sonata Software" ,Symbol : "SS" , Price : '₹420.65' , img : "images/sonata-the-modernization-company-logo (1).png"  },
    { name :  "Adani Ports" , Symbol : "AP" , Price : '₹1200.65' , img : "images/logo (1) (1).png"  },
    { name :  "Nippon India" , Symbol : "NI" ,Price : '₹990.65' , img : "images/amc_nippon (1).png"  },
    { name :  "IND Oil" , Symbol : "IO" , Price : '₹820.65' , img : "images/Indian-oil (1).png"  },
  ]

  const [ user , setUser ] = useState(null)
  const [watchlist, setWatchlist] = useState([]) // ✅ watchlist state

  useEffect (() =>{
    const storedUser = localStorage.getItem("user")
    if(storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const addToWatchlist = (stock) => {
    const updatedList = [...watchlist, stock]
    setWatchlist(updatedList)
    localStorage.setItem("watchlist", JSON.stringify(updatedList))
  }

  return (
    <>
      <div className="flex h-auto bg-gray-50">
        {/* Main Content (Now on the left) */}
        <main className="flex-1 p-10">
          <h1 className="text-2xl font-semibold text-gray-800">Market Insights Just for You, {user?.name || "User"} !</h1>
          <p className="mt-4 text-gray-600">Here's what the market's saying today — stay sharp, trade smart.</p>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Indices</h3>
            <div className="mt-6 flex justify-around ">
              {IncidesStocks.map((IncidesStocks) =>(
                <Link key={IncidesStocks.Symbol} to= {`/stocks/${IncidesStocks.Symbol}` }>
                  <div className="border rounded-lg shadow-sm p-4 w-60">
                    <p className="text-sm text-black mb-1">{IncidesStocks.name}</p>
                    <p className="text-lg font-medium text-gray-800">
                      {IncidesStocks.price}<span className="text-sm font-normal text-gray-500">0.00 (0.00%)</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 ">
            <h2 className="text-2xl font-semibold">Most Traded On Site</h2>
            <div className="mt-6 flex justify-between  gap-6">
              {TradedStocks.map((TradedStocks) => (
                <div key={TradedStocks.Symbol} className="relative group">
                  <Link to={`/stocks/${TradedStocks.Symbol}`}>
                    <div className="w-[192px] h-[200px] rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center justify-between text-center">
                      <img
                        src={TradedStocks.img}
                        alt={TradedStocks.name}
                        className="h-10 w-auto mb-2"
                      />
                      <p className="text-sm font-medium text-gray-800 mb-1">{TradedStocks.name}</p>
                      <p className="text-lg font-semibold text-gray-900">{TradedStocks.Price}</p>
                      <p className="text-sm text-red-500 font-medium">-0.90 (0.21%)</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => addToWatchlist(TradedStocks)}
                    className="absolute top-2 right-2 text-blue-600 hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Add to Watchlist"
                  >
                    <FiPlusCircle size={22} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Top Gainers</h2>
            <div className="mt-6 flex justify-between gap-6">
              {Topgainers.map((Topgainers) => (
                <div key={Topgainers.Symbol} className="relative group">
                  <Link to= {`/stocks/${Topgainers.Symbol} `}>
                    <div className="w-[192px] h-[200px] rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center justify-between text-center">
                      <img
                        src={Topgainers.img}
                        alt={Topgainers.name}
                        className="h-10 w-auto mb-2"
                      />
                      <p className="text-sm font-medium text-gray-800 mb-1">{Topgainers.name}</p>
                      <p className="text-lg font-semibold text-gray-900">{Topgainers.Price}</p>
                      <p className="text-sm text-red-500 font-medium">-0.90 (0.21%)</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => addToWatchlist(Topgainers)}
                    className="absolute top-2 right-2 text-blue-600 hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Add to Watchlist"
                  >
                    <FiPlusCircle size={22} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="w-[35%] flex flex-col bg-white shadow-lg p-6 overflow-y-auto">
          <User_sidebar/>
        </aside>
      </div>
    </>
  )
}
