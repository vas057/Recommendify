import React from 'react';
import '../App.css';
import queryString from 'query-string';
import './Slider.scss';

import {useState, useEffect} from 'react';

function Slider() {
    const [value, onChange] = useState(1);

    useEffect(() => {
        const elem = document.querySelector('.bubble'); //grabbing the bubble element
        if (elem) {
            elem.style.left = `${Number(value/4)}px`
        }
        console.log(value)
    })

    return (
        <div className = "toggles">
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
        </div>

    );
}

export default Slider;