import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

export const BASE_URL = 'https://api.nasa.gov/planetary/apod'
export const API_KEY = 'u1lTW9L7c50eLmpEsZXOPKFBkSyoMtz3b8hCOatb'

ReactDOM.render(<App />, document.getElementById("root"));
