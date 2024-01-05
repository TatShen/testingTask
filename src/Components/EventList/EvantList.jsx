
import React, { useState } from "react"
import { EventData } from "../../Data/EventData"
import './eventList.css'
import { Link } from "react-router-dom";

function EventList (){
const [data] = useState(EventData)
return(<div className="container">
{data.sort((a,b) => (a.data > b.data ? 1: -1)).map((item, key) => {
   return( <Link to={`/eventCards/${item.id}`} className="eventLink" key={key}>
    <ul>
        <li className="liContainer" >
           <h2>{item.data}</h2>
           <div className="comands">
            <div className="owner">
                <img src={item.ownerImg} alt={item.owner}></img>
                <h3>{item.owner}</h3>
            </div>
            <div className="guest">
                <img src={item.guestImg} alt={item.guest}></img>
                <h3>{item.guest}</h3>
            </div>
           </div> 
        </li>
    </ul> 
    </Link>)
})}
</div>)
}

export default EventList