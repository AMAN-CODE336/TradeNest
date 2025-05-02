import React from "react";
import { Search, ExternalLink } from "lucide-react";


export default function Tradepage(){
    const coins = [
        { name: "VINU", price: "0.00000001233", change: "3.90%", color: "bg-gray-700" },
        { name: "BRISE", price: "0.0000000643", change: "2.71%", color: "bg-gray-700" },
        { name: "MOG", price: "0.000000396", change: "5.02%", color: "bg-gray-700" },
        { name: "XEN", price: "0.000000072", change: "2.70%", color: "bg-gray-700" },
        { name: "X", price: "0.000008294", change: "20.38%", color: "bg-green-600" },
        { name: "VOLT", price: "0.0000002132", change: "2.73%", color: "bg-gray-700" },
        { name: "CATS", price: "0.000000716", change: "4.38%", color: "bg-gray-700" },
        { name: "GOATS", price: "0.00001381", change: "6.34%", color: "bg-green-600" },
      ];
    return (
        <div className="bg-gray-900 text-white overflow-y-scroll p-4 flex flex-col" style={{height : "100%" ,width : "20%"}}>
        
        <div className="flex items-center gap-2 border-b border-gray-700 pb-3">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt="Bitcoin"
            className="w-8 h-8"
          />
          <div>
            <p className="text-sm text-gray-400">Bitcoin</p>
            <p className="text-lg font-semibold">BTC • INR</p>
          </div>
        </div>
  
       
        <div className="flex justify-between items-center py-3 border-b border-gray-700">
          <div className="flex gap-4 text-gray-400 text-sm">
            <span className="text-red-400 border-b-2 border-red-400 cursor-pointer">ALL</span>
            <span className="cursor-pointer">INR</span>
            <span className="cursor-pointer">BTC</span>
            <span className="cursor-pointer">MORE</span>
          </div>
          <ExternalLink size={16} className="text-gray-400 cursor-pointer" />
        </div>
  
  
        <div className="relative mt-3">
          <input
            type="text"
            placeholder="Search Coins"
            className="w-full bg-gray-800 text-gray-300 px-3 py-2 rounded outline-none"
          />
          <Search className="absolute right-3 top-2 text-gray-400" size={16} />
        </div>
  
    
        <div className="mt-4 space-y-2">
          {coins.map((coin, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-800 p-2 rounded">
              <div>
                <p className="text-sm font-semibold">{coin.name}-USDT</p>
                <p className="text-xs text-gray-400">{coin.price} USDT</p>
              </div>
              <div className="relative group w-fit cursor-pointer">
              <div className={`px-2 py-1 rounded block text-white group-hover:hidden transition-opacity duration-300 delay-200 opacity-100 ${coin.color}`}>{coin.change}</div>
              <div className="flex space-x-2 hidden group-hover:block transition-opacity delay-200 duration-300 opacity-100 ">
                <a href="" className="border rounded-md px-2 py-1 bg-green-400">B</a>
                <a href="" className="border rounded-md px-2 py-1 bg-orange-400">s</a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}