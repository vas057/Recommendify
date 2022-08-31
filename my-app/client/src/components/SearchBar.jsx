import React, {useState} from 'react';
import '../App.css';
import {Grid, TextField, Button} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {Container, InputGroup, FormControl} from 'react-bootstrap'
import queryString from 'query-string';
import './SearchBar.scss'

// async function search() {
//     console.log("Search for " + searchInput)
// }

function SearchBar () {

    function getToken() {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
      
        fetch('https://api.spotify.com/v1/me', {
          headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json())
    
        return accessToken;
    }

    function searchSpotify(val) {
        console.log("Value in SEARCH FUNCTION" + val);
        let token = getToken();

        //find artistID
        var getArtistID = {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        //get artists from api
        fetch('https://api.spotify.com/v1/search?q=' + val + '&type=artist', getArtistID)
            .then(response => response.json())
            .then(data => console.log(data))
    
    }

    return (
        <div className = "search-bars">
            <form>
                <h2>Artist</h2>
                <div className = "search-bar">
                    <input id="searchArtistField"
                        placeholder="Enter Artist Here"
                        onKeyPress={event => {
                            if (event.key == "Enter") {
                                var searchVal = document.getElementById("searchArtistField").value; //get artist value
                                event.preventDefault();
                                searchSpotify(searchVal); //find artist
                            }
                        }}>
                    </input>
                    <button 
                        type="button"
                        onClick={event => {
                            var searchVal = document.getElementById("searchArtistField").value; //get artist value
                            event.preventDefault();
                        }
                    }>Search</button>   
                </div>
            </form>
            <form>
                <h2>Genre</h2>
                <div className = "search-bar">
                    <input id="searchGenreField"
                        placeholder="Enter Genre Here">
                    </input>
                </div>
                
            </form>
            <form>
                <h2>Similar Track</h2>
                <div className = "search-bar">
                    <input id="searchTrackField"
                        placeholder="Enter A Similar Track Here"
                        onKeyPress={event => {
                            if (event.key == "Enter") {
                                var searchVal = document.getElementById("searchTrackField").value; //get track value
                                event.preventDefault();
                                // searchSpotify(searchVal); //find genre
                            }
                        }}>
                    </input>
                    <button 
                        type="button"
                        onClick={event => {
                            var searchVal = document.getElementById("searchTrackField").value; //get track value
                            event.preventDefault();
                            // searchSpotify(searchVal); //find artist
                        }
                    }>Search</button>
                </div>

            </form>
        </div>
    );
}

export default SearchBar;