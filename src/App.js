import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import First from './components/first.js';
import Second from './components/second.js';


const App = () => {
  const apiUrl = 'https://www.boredapi.com/api/activity';
  const [activity, setActivite] = useState([]);
  const [result, setResult] = useState([]);

  function checkWeight() {
    let ask = prompt('how much do you weigh? kg')
    if ( ask >= 10 && ask <= 49 ) {
      setResult('oouuu dude, you are so skinny');
    } else if ( ask >= 50 && ask <= 80 ) {
      setResult ('well done, you hawe nice body');
    } else if( ask >= 81 && ask <= 150) {
      setResult ('omg, you need be more active');
    }
    
  } 

  useEffect(() => {
    const fetchData = async () => {
    await axios.get(apiUrl).then(res => {
        setActivite(res.data.activity);
       })
     }
    fetchData();
    checkWeight();  
}, []);



  return (
    <div className="App">
      <h1 className="title">Who are you ?</h1>
      <First  />
      <Second activity={activity}  result={result}/>
    
    </div>
  );
}



export default App;
