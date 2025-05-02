import { useEffect, useState } from "react"
import User_sidebar from "./User_sidebar"


export default function User_Dashboard (){

const [ user , setUser ] = useState(null)

useEffect (() =>{

  const storedUser = localStorage.getItem("user" )
if(storedUser) {
setUser(JSON.parse(storedUser))
}
} , [])


    return (
        <>
       <div className="flex h-screen bg-gray-50">
      {/* Main Content (Now on the left) */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold text-gray-800">Market Insights Just for You, {user?.name || "User"} !</h1>
        <p className="mt-4 text-gray-600">Here's what the market's saying today — stay sharp, trade smart.</p>
      </main>

      <aside className="w-[35%] flex flex-col bg-white shadow-lg p-6 overflow-y-auto">
        <User_sidebar/>
        </aside>
     
    </div>
        </>
    )
}