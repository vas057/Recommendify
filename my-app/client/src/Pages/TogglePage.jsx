import React from 'react';
// import '../App.css';
import './TogglePage.scss';
import queryString from 'query-string';
import {useState, useEffect} from 'react';
import Slider from '../components/Slider';
import SearchBar from '../components/SearchBar';

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

    return (
        <div className="App">
            <div className = "toggle-page">
                <h2 className = "header">Recommendify</h2>
                <hr className = "horizontal-line"></hr>
                <p className = "toggle-page-desc">Adjust the sliders to your liking, and let Recommendify do the work!</p>
                <Slider></Slider>
                <SearchBar></SearchBar>
            </div>
        </div>
    );
}

export default Home;