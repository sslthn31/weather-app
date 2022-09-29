import React from 'react'

const Weather = (props) => {
const {description, forecast, temperature, wind} = props
  return (
    <div>
        <p>{description}</p>
            {forecast.map((data) => {
                return(
                  <div className="forecast">
                    <p>{data.day}</p>
                    <p>{data.temperature}</p>
                    <p>{data.wind}</p>
                  </div>  
                )
            })}
        <p>{temperature}</p>
        <p>{wind}</p>
    </div>
  )
}

export default Weather