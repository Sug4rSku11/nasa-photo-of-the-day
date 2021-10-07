import React, {useState, useEffect}  from "react";
import "./App.css";
import {BASE_URL, API_KEY} from './index.js';
import axios from 'axios';





function App() {
 
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [copyright, setCopyright] = useState('');


useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(res => {
    const {data } = res;
    console.log(data);
    setUrl(data.url)
    setTitle(data.title);
    setExplanation(data.explanation);
    setCopyright(data.copyright);
    console.log("First Render");
    })
   
  .catch(err=> {
    console.error(err,"Something happened...");
  })
}, []);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h2>{title}</h2>
      <img src={url} alt={title}></img>
      <p>{copyright}</p>
      <p>{explanation}</p>
      
    </div>
  );
}

export default App;
