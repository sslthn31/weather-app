import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 0;
  border-radius: 5px;
  width: 500px;
  height: 100vh;
  background: #FF0099;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #493240, #FF0099);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #493240, #FF0099); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  `
export const WeatherForm = styled.section`
width: 400px;
display:  flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 1.5rem;
`
export const WeatherWrapper = styled.section`
padding: 2rem 0;
display: flex;
flex-direction: column;
width: 300px;
`
export const WeatherList = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 6rem;
`
export const WeatherDayList = styled.section`
padding: 2rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;
text-align: center
`


