import React from 'react'
import { WeatherWrapper, WeatherList, WeatherDayList, Temperature } from './StyledComponents'
import Cloudy from '../Asset/weather-icon/cloudy.png'
import Sun from '../Asset/weather-icon/sun.png'
import Rain from '../Asset/weather-icon/rain.png'
import Moment from 'moment';

const Weather = (props) => {
// const moment = Moment();

const {description, forecast, temperature, wind, nameCity} = props
  return (
    <WeatherWrapper>
      <WeatherList>
        {!description ? null : 
        <img 
        src={description?.includes('cloudy') ? Cloudy : description?.includes('rain') ? Rain : Sun} alt={description} 
        style={{
          width: '200px',
          height: 'auto',
          marginBottom: '1.5rem'
        }}
        />
      }
       <h2>{nameCity} - {description}</h2>
        {/* <p>{wind}</p> */}
      </WeatherList>
        <Temperature style={{textAlign: 'center'}}>{temperature}</Temperature>
      <WeatherDayList>
        {forecast == null ? null : 
        forecast.map((data) => {
          return(
            <div className="forecast">
              {/* <p>{data.day}</p> */}
              <p>{data.temperature}</p>
              <p>{data.wind}</p>
            </div>  
          )
      })
        }
      </WeatherDayList>          
    </WeatherWrapper>
  )
}

export default Weather