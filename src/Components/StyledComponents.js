import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 0;
  width: 500px;
  height: 100vh;
  background: #AA076B;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #61045F, #AA076B);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #61045F, #AA076B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
export const WeatherForm = styled.section`
width: 400px;
display:  flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 1.5rem;
@media (max-width: 600px) {
  padding: 0 10px;
}
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
margin-bottom: 4rem;
`
export const WeatherDayList = styled.section`
padding: 2rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;
text-align: center
`
export const Temperature = styled.h3`
text-align: center;
font-size: 25px;
font-weight: 600;
margin-bottom: 2.5rem;
`