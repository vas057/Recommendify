import React from 'react';
import '../App.css';
import queryString from 'query-string';
import './Slider.scss';

import {useState, useEffect} from 'react';

function Slider() {
    var minAcoustic = 0;
    // const [value, onChange] = useState(1);
    var acousticVal = 0, danceVal = 0;

    function getToken() {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
      
        fetch('https://api.spotify.com/v1/me', {
          headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json())
    
        return accessToken;
    }


    // useEffect(() => {
    //     const elem = document.querySelector('.bubble'); //grabbing the bubble element
    //     if (elem) {
    //         elem.style.left = `${Number(value/4)}px`
    //         var sliderVal = value/100;
    //     }
    //     console.log(sliderVal)

    // })

    function setVal() {
        const elem = document.querySelector('.bubble'); //grabbing the bubble element
        if (elem) {
            elem.style.left = `${Number(acousticVal/4)}px`
            var sliderVal = acousticVal/100;
        }
        console.log(sliderVal)


    }

    
    function searchSpotify(val) {
        //     console.log("Value in SEARCH FUNCTION" + val);
        let token = getToken();
        console.log("TOKEN" + token)
        var authorization = {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        console.log(val)

        fetch('https://api.spotify.com/v1/recommendations?limit=10&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical&seed_tracks=0c6xIDDpzE81m2q797ordA&min_acousticness=' + val + '&max_acousticness=0.8', authorization)
            .then(response => response.json())
            .then(data => console.log(data))
    
    }
    return (
        <div className = "toggles">
            <div className = "slider-section">
                <h3 className = "slider-label">Acousticness</h3>
                <div className = "slider-noheader">
                    <div className = "slider-labels">
                        <h4>Low</h4>
                        <h4>Average</h4>
                        <h4>High</h4>

                    </div>
                    <div className = "slider_parent">
                        <input 
                            id = "acousticVal"
                            type = "range" 
                            min = "0" 
                            max = "100"
                            defaultValue={0}
                        ></input>
                        <div className = "bubble"></div>                    
                    </div>
                </div>
                
            </div>
            <div className = "slider-section">
                <h3 className = "slider-label">Danceability</h3>
                <div className = "slider-noheader">
                    <div className = "slider-labels">
                        <h4>Low</h4>
                        <h4>Average</h4>
                        <h4>High</h4>

                    </div>
                    <div className = "slider_parent">
                        <input 
                            id = "danceVal"
                            type = "range" 
                            min = "0" 
                            max = "100"
                            defaultValue={0}
                        ></input>
                        <div className = "bubble"></div>                    
                    </div>
                </div>
                
            </div>
            <div className = "slider-section">
                <h3 className = "slider-label">Energy</h3>
                <div className = "slider-noheader">
                    <div className = "slider-labels">
                        <h4>Low</h4>
                        <h4>Average</h4>
                        <h4>High</h4>

                    </div>
                    <div className = "slider_parent">
                        <input 
                            id = "energyVal"
                            type = "range" 
                            min = "0" 
                            max = "100"
                            defaultValue={0}
                        ></input>
                        <div className = "bubble"></div>                    
                    </div>
                </div>
                
            </div>
            <div className = "slider-section">
                <h3 className = "slider-label">Instrumentalness</h3>
                <div className = "slider-noheader">
                    <div className = "slider-labels">
                        <h4>Low</h4>
                        <h4>Average</h4>
                        <h4>High</h4>

                    </div>
                    <div className = "slider_parent">
                        <input 
                            id = "instrumentalVal"
                            type = "range" 
                            min = "0" 
                            max = "100"
                            defaultValue={0}
                        ></input>
                        <div className = "bubble"></div>                    
                    </div>
                </div>
                
            </div>
            <div className = "slider-section">
                <h3 className = "slider-label">Popularity</h3>
                <div className = "slider-noheader">
                    <div className = "slider-labels">
                        <h4 className = "labels">Low</h4>
                        <h4 className = "labels">Average</h4>
                        <h4 className = "labels">High</h4>

                    </div>
                    <div className = "slider_parent">
                        <input 
                            id = "popularityVal"
                            type = "range" 
                            min = "0" 
                            max = "100"
                            defaultValue={0}
                        ></input>
                        <div className = "bubble"></div>                    
                    </div>
                </div>
                
            </div>
        </div>

    );
}

export default Slider;
