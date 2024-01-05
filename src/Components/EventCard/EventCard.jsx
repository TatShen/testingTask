import { useState } from "react"
import { useParams } from "react-router-dom"
import { EventData } from "../../Data/EventData"
import './eventCard.css'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

function EventCard () {
    const {id} = useParams()
    const [event] = useState(EventData.find((item) => item.id === id))
    const [rate, setRate] = useState("")
    const handlerInput = (value) => {
        setRate(value.target.id)
    }
    const dispatch = useDispatch()
    const addRate = () => {
        dispatch({type: "ADD_RATE", payload: [event.owner, event.guest, rate]})
    }
    return(<>
 
    <Link to='/' className="back">Вернуться назад</Link>
   
        <div className="container">
            <h1 className="title">{event.data}</h1>
            <div className="comandsCard">
            <div className="owner">
                <img src={event.ownerImg} alt={event.owner}></img>
                <h3>{event.owner}</h3>
            </div>
            <div className="guest">
                <img src={event.guestImg} alt={event.guest}></img>
                <h3>{event.guest}</h3>
            </div>
            </div>
            <div className="coefficients">
               <div className="result">
                <p> Коэфициент на победу хозяев 
                </p>
                <div>
                <input type="radio" id="winOwner" name="drone" value='winOwner' onChange={value => handlerInput(value)}></input>
                <label for= 'winOwner'>{event.kWinOwner}</label>
                </div>
               </div>
               <div className="result">
                <p> Коэфициент на победу гостей </p>
                <div>
                <input type="radio" id="winGuest" name="drone" value='winGuest'onChange={value => handlerInput(value)}></input>
                <label for='winGuest'>{event.kWinGuest}</label>
                </div>
               </div>
               <div className="result">
                <p> Коэфициент на ничью <br/>  </p>
                <div><input type="radio" id="draw" name="drone" value='draw'onChange={value => handlerInput(value)}></input>
                <label for="draw">{event.kDraw}</label></div>
               </div>
            </div>
    {rate && <button onClick={addRate} className="button">
            <Link to='/' className="buttonLink">Сделать ставку</Link>
    </button>}
        </div>
        </>
    )
}

export default EventCard