import { useSelector } from 'react-redux'
import './header.css'

function Header () {
    const rates = useSelector(state => state.rates)
    function  win (){if (rates[2] === 'winOwer') {return `победит ${rates[0]}`} else if (rates[2] === 'winGuest') {return `победит ${rates[1]}`} else {return 'ничья'}} 
return(
    <div className="header"> 
        <h1 className="tittel1"> Ставки на спорт! <br/> Будь в игре</h1>
        {rates.length>0 && <div className="massage">
            <p> Спасибо, ваша ставка на матч <span className='massageText'> {rates[0]} </span> : <span className='massageText'> {rates[1]} </span>, <span className='massageText'>{win()} </span>принята</p>
        </div>}
    </div>
)
}

export default Header