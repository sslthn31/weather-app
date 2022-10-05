import axios from 'axios'
import React from 'react'
import Weather from './Weather';
import { Input, Button } from '@mui/material';
import {Wrapper, SubmitButton, WeatherForm} from './StyledComponents'
import WeatherDefault from './WeatherDefault';

const MainPage = () => {
  const [weatherInput, setWeatherInput] = React.useState("");
  const [takeWeather, setTakeWeather] = React.useState([]);
  const [takeDefaultWeather, setTakeDefaultWeather] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const defaultCity = weatherInput.toUpperCase();
  const cityDefault = 'Jakarta'
  
  const fetchingApi = () => {
  axios(`https://goweather.herokuapp.com/weather/${defaultCity}`)
    .then((res) => {
    console.log(res.data)
    setTakeWeather(res.data)
   
  })
    .catch((err) => console.log(err))
  }
  const fetchingApiDefault = (e) => {
  axios(`https://goweather.herokuapp.com/weather/${cityDefault}`)
    .then((res) => {
    console.log(res.data)
    setTakeDefaultWeather(res.data)    
  })
    .catch((err) => console.log(err))
  }
  React.useEffect(() => {
    fetchingApiDefault()
  },[])  
  return (
    <>
    <Wrapper>
    <WeatherForm>
    <Input 
    placeholder='Input your City'
    onChange={(e) => setWeatherInput(e.target.value)} 
    sx={{
      paddingLeft: '10px',
      marginBottom: '1.5rem'
    }}
    />
    <Button onClick={fetchingApi} 
    sx={{
      width: '150px',
      height: '30px',
      fontWeight: '700',
      borderRadius: '10px',
      color: '#12c2e9',
      backgroundColor: '#3c1053',
      "&:hover":{
      backgroundColor: '#FF0099',
      color: '#493240'
      }
    }}>Submit</Button> 
    </WeatherForm>   
    {!defaultCity ?  
    <WeatherDefault nameCity={cityDefault} description={takeDefaultWeather.description} forecast={takeDefaultWeather.forecast} temperature={takeDefaultWeather.temperature} wind={takeDefaultWeather.wind}/>
    : <Weather nameCity={defaultCity} description={takeWeather.description} forecast={takeWeather.forecast} temperature={takeWeather.temperature} wind={takeWeather.wind}/>
    }
    </Wrapper>
    </>
  )
}

export default MainPage