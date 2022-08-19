import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Home from "./components/Homepage";
import Loading from "./components/LoadingScreen";
import SpotifyRecommender from "./components/RecommendingScreen";
function App() {
  // const [accesstoken, setAccessToken] = useState("");

  // useEffect(() => {
  //   //API ACCESS TOKEN
  //   var authParameters = {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type' : 'application/x-www-form-urlencoded'
  //     }, 
  //     body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
  //   }

  //   fetch ('https://accounts.spotify.com/api/token', authParameters)
  //     .then(result => result.json())
  //     .then(data => setAccessToken(data.access_token)) //spits out access token
  // }, [])


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <a href = {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a> */}
    </div>
  );
}