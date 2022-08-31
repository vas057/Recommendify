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

// function searchSpotify() {
//     //     console.log("Value in SEARCH FUNCTION" + val);
//     let token = getToken();
//     console.log("TOKEN" + token)
//     var authorization = {
//         method: 'GET', 
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + token
//         }
//     }

//         .then(response => response.json())
//         .then(data => console.log(data))

// }

var minAcoustic = 0, maxAcoustic = 1, minDanceability = 0, maxDanceability = 1, minEnergy = 0, maxEnergy = 1, minInstrumentalness = 0, maxInstrumentalness = 1, minPopularity = 0, maxPopularity = 1;

function findRange(value) {
    var min, max;

    if (value < 0.3) {
        min = 0;
        max = 0.33;
    }
    if (0.33 >= value <= 0.66) {
        min = 0.34;
        max = 0.66;
    }
    if (value > 0.66) {
        min = 0.67;
        max = 1;
    }

    return [min, max];
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

async function searchSpotify(ARTIST, TRACK) {
    let token = getToken();

    //GET AUTH
    var searchParams = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    //get artists from api
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + ARTIST + '&type=artist', searchParams)
        .then(response => response.json())
        .then(data => {return data.artists.items[0].id})
    console.log(artistID) //RETURNS ARTIST ID


    var trackID = await fetch('https://api.spotify.com/v1/search?q=' + TRACK + '&type=track', searchParams)
        .then(response => response.json())
        .then(data => {return data.tracks.items[0].id})
    console.log(trackID) //RETURNS TRACK ID


    //recommendation information
    var GENRE = document.getElementById("searchGenreField").value;
    [minAcoustic, maxAcoustic] = findRange(document.getElementById("acousticVal").value/100);
    [minDanceability, maxDanceability] = findRange(document.getElementById("danceVal").value/100);
    [minEnergy, maxEnergy] = findRange(document.getElementById("energyVal").value/100)
    [minInstrumentalness, maxInstrumentalness] =  findRange(document.getElementById("instrumentalVal").value/100)
    [minPopularity, maxPopularity] = findRange(document.getElementById("popularityVal").value/100)


    console.log(minAcoustic)
    console.log(maxAcoustic)
    console.log(minDanceability)
    console.log(maxDanceability)
    console.log(minEnergy)
    console.log(maxEnergy)
    console.log(minInstrumentalness)
    console.log(maxInstrumentalness)
    console.log(minPopularity)
    console.log(maxPopularity)
    

    
    //GET TRACKS
    fetch('https://api.spotify.com/v1/recommendations?seed_artists=' + artistID 
    + '&seed_genres="' + GENRE 
    + '&seed_tracks=' + trackID 
    + '&min_acousticness=' + minAcoustic
    + '&max_acousticness=' + maxAcoustic
    + '&min_danceability=' + minDanceability
    + '&max_danceability=' + maxDanceability
    + '&min_energy=' + minEnergy
    + '&max_energy=' + maxEnergy, searchParams)

    .then(response => response.json())
    .then(data => console.log(data))

    return artistID;
}

/*
SAMPLE FETCH EX
    fetch('https://api.spotify.com/v1/recommendations?seed_artists=1uNFoZAHBGtllmzznpCI3s&seed_genres=rock&seed_tracks=5Lhxlge1CR1DrgDAje8Qaw&min_acousticness=0&max_acousticness=1', authorization)

*/



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
                        // getToken(); //find artist
                        var ARTIST = document.getElementById("searchArtistField").value;
                        var TRACK = document.getElementById("searchGenreField").value;

                        searchSpotify(ARTIST, TRACK);
                        // console.log(ARTIST);
                        // console.log(TRACK);
                        // var ACOUSTICNESS_VAL = document.getElementById("acousticVal").value/100;
                        // var DANCEABILITY_VAL = document.getElementById("danceVal").value/100;
                        // console.log("THIS WORKS")
                        // console.log(ACOUSTICNESS_VAL);
                        // findRange(ACOUSTICNESS_VAL)
                        // console.log("MIN" + minAcoustic)
                        // console.log("MAX" + maxAcoustic)
                    }
                }>Find a Song!</button>
            </div>
        </div>
    );
}

export default Home;