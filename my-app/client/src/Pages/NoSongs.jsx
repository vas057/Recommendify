import React from 'react'
import queryString from 'query-string';

function NoSongs() {


    function getToken() {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
      
        fetch('https://api.spotify.com/v1/me', {
          headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json())
        .then(data => console.log(data))
    
        return accessToken;
    }
    
    return (
        <div className = "App">
            <div className = "no-songs">
                <h2>No Songs found...</h2>
            </div>
            <button
                onClick = {event => {
                    window.onload('http://localhost:3000/TogglePage?access_token=' + getToken())
                }}
            >Return To Previous Page</button>
        </div>

    )
}

export default NoSongs;