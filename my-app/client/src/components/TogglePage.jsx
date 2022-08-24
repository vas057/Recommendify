import React from 'react';
import '../App.css';
// import './Homepage.scss'
import queryString from 'query-string';
import {useState, useEffect} from 'react';

function getToken() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
  
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => console.log(data))

    return accessToken;
}

function Home() {
    const [value, onChange] = useState(1);

    useEffect(() => {
        const elem = document.querySelector('.bubble'); //grabbing the bubble element
        if (elem) {
            elem.style.left = `${Number(value/4)}px`
        }
        console.log(value)
    })

    return (
        <div className="App">
            <header className="App-header">
                <h1 className = "title">adskfjldsfkjldsj</h1>
                <div className = "slider_parent">
                    <input 
                        type = "range" 
                        min = "1" 
                        max = "600"
                        value={value}
                        onChange={({target:{value:radius}}) => {
                            onChange(radius);
                        }}
                    ></input>   
                    <div className = "bubble">
                        {value}
                    </div>
                </div>

            </header>
        </div>
    );
}

export default Home;