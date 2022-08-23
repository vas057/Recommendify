import React from 'react';
import '../App.css';
import './Homepage.scss'
import queryString from 'query-string';


function Home() {

    function getToken() {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
      
        fetch('https://api.spotify.com/v1/me', {
          headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json())
        .then(data => console.log(data))
      }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className = "title">Recommendify</h1>
                <p className = "description">Get the perfect next song to add to your playlist.</p>
                <button className = "login-button" onClick={() => {window.location = 'http://localhost:8888/login'}}>LOGIN TO SPOTIFY</button>
                {/* <button className = "login-button" onClick={getToken}>Return Data</button> */}
            </header>
        </div>
    );
}

export default Home;