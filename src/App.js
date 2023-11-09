import { useEffect, useState } from 'react';
import video from "./dunes.mp4";
import './App.css';

function App() {

const [bored, setBored] = useState("");


useEffect(() => {
  getQuote();
}, [])

  const getQuote = async () => {
 const response = await fetch(`https://www.boredapi.com/api/activity/`);
 const data = await response.json();
   setBored(data.activity);
 }


return (
  <div className="App">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />    
    </video>
    <h1>I am bored. What should I do?</h1>
    <div className='cont'>
      <h2>{bored}</h2>
    </div>
    <button onClick={getQuote}>Next activity</button>
  </div>
 );
 }

export default App;

