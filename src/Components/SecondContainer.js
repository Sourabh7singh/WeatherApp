import {React,useContext} from 'react'
import { DataContext } from './DataContext';

function SecondContainer() {
    const {data}=useContext(DataContext);
    const {forecast} = data;
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  return (
    <div className="second-container">
        {/* <!-- third box --> */}
        <div className="forecast">
            <h4>3 days forecast: </h4>
            {forecast.forecastday.map((element)=>{
                return <div className='forecast-element' key={element.date_epoch}> {element.day.avgtemp_c}℃ {days[new Date(element.date).getDay()]}, {element.date.slice(8,10)} {month[new Date(element.date).getMonth()]} </div>
            })}
        </div>
        {/* <!-- fourth box --> */}
        <div className="detail">
            <h5>Hourly Forecast: </h5>
            <div className="detail-container">
                {forecast.forecastday[0].hour.map((element)=>{
                    if (element.time.slice(11,16)==="12:00"||element.time.slice(11,16)==="15:00"||element.time.slice(11,16)==="18:00"||element.time.slice(11,16)==="21:00"||element.time.slice(11,16)==="00:00"){
                        return <div className='boxes' key={element.time_epoch}>
                            <div>
                                {element.time.slice(11,16)}
                            </div>
                            <div>
                                <img src={element.condition.icon} alt={element.condition.text} />
                            </div>
                            <div>
                                {element.temp_c} ℃
                            </div>
                            <div>
                                {element.wind_kph}Km/h
                            </div>
                        </div>
                    }
                    return null
                })}
            </div>
        </div>
    </div>    
  )
}

export default SecondContainer
