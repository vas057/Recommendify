import React from 'react';
import '../App.css';
import queryString from 'query-string';
import './Slider.scss';

import {useState, useEffect} from 'react';

function Slider() {
    const [value, onChange] = useState(1);

    function getToken() {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
      
        fetch('https://api.spotify.com/v1/me', {
          headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json())
    
        return accessToken;
    }


    useEffect(() => {
        const elem = document.querySelector('.bubble'); //grabbing the bubble element
        if (elem) {
            elem.style.left = `${Number(value/4)}px`
            var sliderVal = value/100;
        }
        console.log(sliderVal)

        // function searchSpotify(val) {
        //     console.log("Value in SEARCH FUNCTION" + val);
            let token = getToken();
            console.log("TOKEN" + token)
            var num = {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }

            fetch('https://api.spotify.com/v1/recommendations?limit=10&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical&seed_tracks=0c6xIDDpzE81m2q797ordA&min_acousticness=0.2&max_acousticness=0.8', num)
                .then(response => response.json())
                .then(data => console.log(data))
        
        // }
    })

    return (
        <div className = "toggles">
            <div className = "slider-section">
                <h3 className = "slider-label">Acousticness</h3>
                <div className = "slider_parent">
                    <input 
                        type = "range" 
                        min = "0" 
                        max = "100"
                        value={value}
                        onChange={({target:{value:radius}}) => {
                            onChange(radius);
                        }}
                    ></input>   
                    <div className = "bubble">
                        {value}
                    </div>
                    
                </div>
            </div>
            
        </div>

    );
}

export default Slider;