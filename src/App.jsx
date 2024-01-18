import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import { WiCloud } from "react-icons/wi";

// import { WiBarometer } from "react-icons/wi";
// <WiBarometer />
// import { WiHumidity } from "react-icons/wi";
// <WiHumidity />
// import { WiStrongWind } from "react-icons/wi";
// <WiStrongWind />
// import { WiSunrise } from "react-icons/wi";
// <WiSunrise />
// import { WiSunset } from "react-icons/wi";
// <WiSunset />

// //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 const App = () =>{
const [splace,setSplace]=useState("");
const [info,setInfo]=useState("");
const[dData ,setData]=useState("")

  const callApi=async()=>{
try{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${splace}&units=metric&appid=77f9670ec356f82e5a97ac36cd234242`);
    setInfo(res)
    const {Humidity,Pressure}=info.data.main;
    const{Sunrise,Sunset}=info.data.sys;
    const{wind}=info.data.wind.speed;

    const digit={
      Humidity,
      Pressure,
      Sunrise,
      Sunset,
      wind ,
    }

    setdData(digit)
}
catch(error) {console.log("rani",error)}
   
  }

  return(
<>

<div id="container">
<div id="inputField">
      <input type="search" placeholder="Search here..." value={splace} 
      onChange={(e)=>setSplace(e.target.value)}/>
      <button onClick={callApi}>search</button>
</div>
<div id="main">
      <WiCloud id="icon" size="10rem"/>
      <div id="TempInfo">
          <div id="temp">
             <div id="deg">{info.data.main.temp}</div>
             <div >{info.data.weather[0].main}<br/>{info.data.name},{info.data.sys.country}</div>

          </div>
          <div id="Ctime">{new Date().toLocaleString()}</div>
      </div>
</div>  
<WeatherInfo icons={ <WiHumidity />} infos={Humidity}/>
<WeatherInfo icons={ <WiBarometer />} infos={Pressure}/>
<WeatherInfo icons={ <WiStrongWind />} infos={Wind}/>
<WeatherInfo icons={ <WiSunrise />} infos={Sunrise}/>
<WeatherInfo icons={ <WiSunset />} infos={Sunset}/>
</div>
</>
)
  }
export default App;