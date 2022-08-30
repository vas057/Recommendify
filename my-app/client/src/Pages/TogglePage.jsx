import React from 'react';
// import '../App.css';
import './TogglePage.scss';
import queryString from 'query-string';
import {useState, useEffect} from 'react';
import Slider from '../components/Slider';
import SearchBar from '../components/SearchBar';
// import {acousticValue} from '../components/Slider/ACOUSTICNESS_VAL'


//FUNCTION TO COLLECT ALL INPUT VALUES
// function whenPressed() {
//     // console.log(acousticValue)
//     var ACOUSTICNESS_VAL = document.getElementById("acousticVal").value/100;
    


// }
var minAcoustic = 0, maxAcoustic = 1;

function findRange(value) {
    if (value < 0.3) {
        minAcoustic = 0;
        maxAcoustic = 0.33;
    }
    if (0.33 >= value <= 0.66) {
        minAcoustic = 0.34;
        maxAcoustic = 0.66;
    }
    if (value > 0.66) {
        minAcoustic = 0.67;
        maxAcoustic = 1;
    }
}

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

    // whenPressed();
    return (
        <div className="App">
            <div className = "toggle-page">
                <h2 className = "header">Recommendify</h2>
                <hr className = "horizontal-line"></hr>
                <SearchBar></SearchBar>
                <p className = "toggle-page-desc">Adjust the sliders to your liking, and let Recommendify do the work!</p>
                <Slider></Slider>
                <button 
                    type="button"
                    onClick={event => {
                        event.preventDefault();
                        getToken(); //find artist
                        var ACOUSTICNESS_VAL = document.getElementById("acousticVal").value/100;
                        var DANCEABILITY_VAL = document.getElementById("danceVal").value/100;
                        console.log("THIS WORKS")
                        console.log(ACOUSTICNESS_VAL);
                        findRange(ACOUSTICNESS_VAL)
                        console.log("MIN" + minAcoustic)
                        console.log("MAX" + maxAcoustic)
                    }
                }>Find a Song!</button>
            </div>
        </div>
    );
}

export default Home;