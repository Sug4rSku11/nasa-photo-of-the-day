import React, {useState, useEffect}  from "react";
import "./App.css";
import {BASE_URL, API_KEY} from './index.js';
import axios from 'axios';
import styled from "styled-components";


const StyledContainer = styled.div `
  background-color: #ebf1f5;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 5%;
  border: 1px solid #d2d2d2;
  box-shadow: 0px 1px 6px -2px #807f7f;
  border-radius: 8px;
  &:hover {
    transition: all 1s ease-in-out;
    background-color: #e6e5be;
  }

  h1 {
    margin: 4%;
    color: #3c3d3d;
    &:hover{
      color: #730003;
    }
  }

  img {
    width: 80%;
    border-radius: 10px;
    &:hover {
      width: 85%;
      border-radius: 10px;
    }
  }
  p {
    margin: 3%;
    color: #3c3d3d;;
    &:hover{
      color: #16296e;
      font-weight: bold;
    }
  }

`



function App() {
 
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [copyright, setCopyright] = useState('');


useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(res => {
    const {data } = res;
    // console.log(data);
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
    <StyledContainer>
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>{title}</h1>
      <img src={url} alt={title}></img>
      <p>{copyright}</p>
      <p>{explanation}</p>
     
    </div>
    </StyledContainer>
  );
}

export default App;
