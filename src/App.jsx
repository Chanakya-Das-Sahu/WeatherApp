import React from 'react';
// import axios from 'axios';
// //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 const App = () =>{
//   // https://official-joke-api.appspot.com/random_joke
//   // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={77f9670ec356f82e5a97ac36cd234242}
//   // <i class="fa-solid fa-cloud-rain"></i>
//   // <i class="fa-solid fa-sun"></i>
//   // <i class="fa-solid fa-cloud"></i>
//   useEffect( async ()=>{
//     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${raipur}&appid=77f9670ec356f82e5a97ac36cd234242`);
//     console.log(res);
//   })
   
  
  return (
    <>
    <div id="inputField">
      <input type="search" placeholder="Search here..." />
      <button >search</button>
    </div>
    <div id="WeatherInfo">

      
    </div>
    </>
  )
}

export default App;