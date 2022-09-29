import { Button, Input, InputLabel } from '@mui/material';
import axios from 'axios'
import React from 'react'
import Weather from './Weather';

const MainPage = () => {
  const [weatherInput, setWeatherInput] = React.useState('Jakarta');
  const [takeWeather, setTakeWeather] = React.useState([]);
  const defaultCity = weatherInput.toUpperCase();
  const fetchingApi = () => {
    axios(`https://goweather.herokuapp.com/weather/${defaultCity}`)
    .then((res) => {
    console.log(res.data)
    setTakeWeather(res.data)
})
    .catch((err) => console.log(err))
  }
  
  return (
    <>
    <div className="input">
    <form>   
    <Input color='primary' onChange={(e) => setWeatherInput(e.target.value)} />
    <Button color='primary' onClick={fetchingApi}>Submit</Button>
    </form>
    </div>
    <div className="weathers">
      <Weather description={takeWeather.description} forecast={takeWeather.forecast} temperature={takeWeather.temperature} wind={takeWeather.wind}/>
    </div>
    </>
  )
}

export default MainPage