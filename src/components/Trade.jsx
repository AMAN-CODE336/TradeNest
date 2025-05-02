import Tradepage from "../components/Tradepage"
import Graph from "../components/Graph"
import Proccedorder from "../components/Proccedorder"

export default function Trade (){
    return (
        <>
        <div className="flex justify-between items-start h-[90vh]">
<Tradepage />
<Graph style={{width : "50%"}}/>
<Proccedorder style={{width : "25%"}}/>
</div>
        </>
    )
}