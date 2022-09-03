import React, {useState} from 'react';
import '../App.css';
import {Grid, TextField, Button} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {Container, InputGroup, FormControl} from 'react-bootstrap'
import queryString from 'query-string';
import './SongCard.scss'
import tempIMAGE from '../logo.svg'

function SongCard () {

    return (
        <div className = "cards">
            <div className = "song-card">
                <div className = "info-section">
                    <h2>Track Name</h2>
                    <h3>Artist</h3>
                    <h4>Album</h4>
                    <h4>Release Year</h4>   
                </div>
                <div className = "image-playback">
                    <img src = {tempIMAGE} className = "track-image"></img>
                </div>

            </div>
        </div>

    );
}

export default SongCard;