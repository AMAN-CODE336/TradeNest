import { FiChevronDown, FiPlusCircle } from 'react-icons/fi';
import { useState , useEffect } from 'react';

export default function User_sidebar (){
const [ user , setUser ] = useState(null)

useEffect (() =>{

  const storedUser = localStorage.getItem("user" )
if(storedUser) {
setUser(JSON.parse(storedUser))
}
} , [])


    return(
        <>
         <div className='min-h-screen'>
        {/* Your Investments */}
        <div className="mb-8 ">
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
            {/* Watchlist Card */}
            <div className="bg-gray-50 rounded-xl border p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">My First Watchlist</p>
                <p className="text-sm text-gray-500">5 items</p>
              </div>
              <FiChevronDown className="text-gray-500" />
            </div>

            {/* Create New Watchlist */}
            <button className="w-full bg-white border rounded-xl p-4 flex items-center justify-center text-green-600 hover:bg-green-50">
              <FiPlusCircle className="mr-2" />
              Create new watchlist
            </button>
          </div>
        </div>
    </div>
        </>
    )
}