// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const CLIENT_SECRET = "6531758d7319497a996703ee08746d95"
const CLIENT_ID = "440a0c7554da4324b3bf33d7af0247f9"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


function App() {
  const [accesstoken, setAccessToken] = useState("");

  useEffect(() => {
    //API ACCESS TOKEN
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token)) //spits out access token
  }, [])


  return (
    <div className="App">
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a>
    </div>
  );
}

export default App;
