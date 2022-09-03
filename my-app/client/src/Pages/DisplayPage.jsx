import React from 'react';
import '../App.css';
import './DisplayPage.scss';
import queryString from 'query-string';
import { useState, useEffect } from 'react';
import tempIMAGE from '../logo.svg'

function Home() {
    const [song, setSong] = useState("");
    const [artist, setArtist] = useState("");
    const [coverArt, setcoverArt] = useState("");
    const [playbackLink, setLink] = useState("");


    async function searchSpotify(songID, accessToken) {
        console.log(songID)
    
        //GET AUTH
        var searchParams = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
    
        //SONG NAME
        var songName = await fetch('https://api.spotify.com/v1/tracks/' + songID, searchParams)
    
            .then(response => response.json())
            .then(data => {
                console.log(data);      
                setSong(data.name); 
                setArtist(data.artists[0].name);
                setcoverArt(data.album.images[0].url);
                setLink(data.preview_url);
                console.log(playbackLink)
                // setImage()
            })

        // var songName = await fetch('https://api.spotify.com/v1/artists/' + songID, searchParams)

        // .then(response => response.json())
        // .then(data => {
        //     setArtist(data.name)
        // })
    
    }


    const params = new URLSearchParams(window.location.search)
    var selectedItems = []
    let i = 0;
    for (const param of params) {
        selectedItems[i] = param;
        i++;
    }

    // console.log(selectedItems)

    var song_id = selectedItems[0];
    var token = selectedItems[1];

    // console.log(song_id)
    // console.log(token)

    // //initializing variables with selected array
    // var ARTIST_ID = selectedItems[0];
    // var GENRE = selectedItems[1];
    // var TRACK_ID = selectedItems[2];
    // var ACCESS_TOKEN = selectedItems[3];

   searchSpotify(song_id[1], token[1]);
    console.log(song)
    // searchSpotify(ARTIST_ID[1], GENRE[1], TRACK_ID[1], ACCESS_TOKEN[1]);
    return (
        <div className="App">
            <div className="display-page">
                <h1 className = "song-name">Song: {song}</h1>
                <h3 className = "artist-name">Artist: {artist}</h3>
                <div className = "image-playback">
                    <img src = {coverArt} className = "track-image" alt = "album art displayed here"></img>
                </div>
                    <audio
                        controls
                        src={playbackLink}>
                            Your browser does not support the
                            <code>audio</code> element.
                    </audio>
                <button
                onClick = {event => {
                    window.location = 'http://localhost:3000/TogglePage?&access_token=' + token[1];
                }}
            >Go Back</button>
            </div>
        </div>
    );
}

export default Home;