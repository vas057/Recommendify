/****
 * SETTING UP SPOTIFY AUTHENTICATION
 * redirect to spotify's user authorization page to get access to user profile
 ***/


 const express = require('express');
 const querystring = require('querystring');
 const axios = require('axios');
 const jwt = require ('jsonwebtoken');
 
 const router = express.Router();
 
 
 //Get user to login using spotify auth page
 router.get('/login', (req, res) => {
     res.redirect(`https://accounts.spotify.com/authorize?${querystring.stringify({
         response_type: 'code',
         redirect_uri: process.env.redirect_uri,
     })}`)
 })  
 
 //Get access token to retrieve data from web api
 router.get('callback', async(req, res) => {
     const {code} = req.query;
     const client_id = process.env.client_id;
     const client_secret = process.env.client_secret;
     const redirect_uri = process.env.redirect_uri
     const grant_type = 'authorization_code';
 
     const basicHeader = 
         Buffer.from(`${client_id}:${client_secret}`).toString('base64');
         const {data} = await
     axios.post ('https://accounts.spotify.com/api/token', querystring.stringify({
         grant_type, code, redirect_uri,
     }), {
         headers: {
             Authorization: `Basic ${basicHeader}`,
             'Content-Type': 'application/x-www-form-urlencoded'
         }
     });
 
     const sessionJWTObject = {
         token: data.access_token,
     }
 
     req.session.jwt = jwt.sign(sessionJWTObject, 
         process.env.JWT_SECRET_KEY)
         return res.redirect('/');
 
 });
 