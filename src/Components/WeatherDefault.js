import React from 'react'
import { WeatherWrapper, WeatherList, WeatherDayList } from './StyledComponents'
import Cloudy from '../Asset/weather-icon/cloudy.png'
import Sun from '../Asset/weather-icon/sun.png'
import Rain from '../Asset/weather-icon/rain.png'

const Weather = (props) => {
const {description, forecast, temperature, wind} = props
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
       <h3>{description}</h3>
        {/* <p>{temperature}</p> */}
        {/* <p>{wind}</p> */}
      </WeatherList>
      <WeatherDayList>
        {forecast == null ? null : 
        forecast.map((data) => {
          return(
            <div className="forecast">
              <p>{data.day}</p>
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