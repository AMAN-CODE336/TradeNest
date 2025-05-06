import Navbar from "./components/Navbar"
import Tradepage from "./components/Tradepage"
import Graph from "./components/Graph"
import Proccedorder from "./components/Proccedorder"
import Dashboard from "./components/Dashboard"
import Home from "./components/Home"
import Trade from "./components/Trade"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"
import User_Dashboard from "./components/User_Dashboard"
import Stockdetails from "./components/Stockdetails"


// import Globe from "./components/Globe"
export default function App(){
  return(
<>
<Navbar/>
{/* <CustomCursor/> */}
{/* <div className="flex justify-between items-start h-[90vh]">
<Tradepage />
<Graph style={{width : "50%"}}/>
<Proccedorder style={{width : "25%"}}/>
</div> */}
{/* <Dashboard/> */}
{/* <Home/> */}
{/* <Globe/> */}
{/* <Trade/> */}
{/* <User_Dashboard/> */}
{/* <Stockdetails/> */}
<Footer/>
</>
  )
}