import React from 'react';
import '../App.css';
import './DisplayPage.scss';
import queryString from 'query-string';
import { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import SearchBar from '../components/SearchBar';

// function getToken() {
//     let parsed = queryString.parse(window.location.search);
//     let accessToken = parsed.access_token;

//     fetch('https://api.spotify.com/v1/me', {
//         headers: { 'Authorization': 'Bearer ' + accessToken }
//     }).then(response => response.json())
//         .then(data => console.log(data))

//     return accessToken;
// }

// function getArtist() {
//     let parsed = queryString.parse(window.location.search);
//     let artistID = parsed.artist;
//     console.log(artistID)
// }

async function searchSpotify(artistID, genre, trackID, accessToken) {
    // let token = getToken();

    //GET AUTH
    var searchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }

    // //get artists from api
    // var artistID = await fetch('https://api.spotify.com/v1/search?q=' + ARTIST + '&type=artist', searchParams)
    //     .then(response => response.json())
    //     .then(data => { return data.artists.items[0].id })
    // console.log(artistID) //RETURNS ARTIST ID


    // var trackID = await fetch('https://api.spotify.com/v1/search?q=' + TRACK + '&type=track', searchParams)
    //     .then(response => response.json())
    //     .then(data => { return data.tracks.items[0].id })
    // console.log(trackID) //RETURNS TRACK ID


    //recommendation information
    // var GENRE = document.getElementById("searchGenreField").value;

    //GET TRACKS
    fetch('https://api.spotify.com/v1/recommendations?seed_artists=' + artistID
        + '&seed_genres="' + genre
        + '&seed_tracks=' + trackID, searchParams)

        .then(response => response.json())
        .then(data => console.log(data))

    // return artistID;
}

/*
SAMPLE FETCH EX
    fetch('https://api.spotify.com/v1/recommendations?seed_artists=1uNFoZAHBGtllmzznpCI3s&seed_genres=rock&seed_tracks=5Lhxlge1CR1DrgDAje8Qaw&min_acousticness=0&max_acousticness=1', authorization)

*/



function Home() {
    const params = new URLSearchParams(window.location.search)
    var selectedItems = []
    let i = 0;
    for (const param of params) {
        selectedItems[i] = param
        i++
      }

    //initializing variables with selected array
    var ARTIST_ID = selectedItems[0];
    var GENRE = selectedItems[1];
    var TRACK_ID = selectedItems[2];
    var ACCESS_TOKEN = selectedItems[3];


    searchSpotify(ARTIST_ID[1], GENRE[1], TRACK_ID[1], ACCESS_TOKEN[1]);
    return (
        <div className="App">
            <div className="display-page">
                <h2 className="header">Your new Mix</h2>

            </div>
        </div>
    );
}

export default Home;