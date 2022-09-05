let express = require('express')
let request = require('request')
let querystring = require('querystring')

// console.log(process.env.SPOTIFY_CLIENT_SECRET)

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


let app = express()

let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:8888/callback'

console.log(redirect_uri)

app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email',
      redirect_uri: process.env.REDIRECT_URI,
    }))
  
})

// app.get('/callback', function(req, res) {
//   console.log("CLIENT SECRET" + process.env.SPOTIFY_CLIENT_SECRET)
//   let code = req.query.code || null
//   console.log("alksdjflkds")
//   let authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     form: {
//       code: code,
//       redirect_uri,
//       grant_type: 'authorization_code'
//     },
//     headers: {
//       'Authorization': 'Basic ' + (new Buffer.from(
//         process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
//       ).toString('base64'))
//     },
//     json: true
//   }
//   console.log("badaginbasdkfsljklkj")
//   request.post(authOptions, function(error, response, body) {
//     var access_token = body.access_token
//     console.log(process.env.FRONTEND_URI)
//     let uri = 'http://localhost:3000'
//     res.redirect(uri + '?access_token=' + access_token)
//   })
// })

app.get('/callback', function(req, res) {

  var code = req.query.code || null;
  var state = req.query.state || null;

  // if (state === null) {
  //   res.redirect('/#' +
  //     querystring.stringify({
  //       error: 'state_mismatch'
  //     }));
  // } else {
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
    },
    json: true
  };
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      // res.send({
      //   'access_token': access_token
      // });
    }

    if (access_token) {
      res.redirect('http://localhost:3000/TogglePage?access_token=' + access_token)
    }
    else {
      res.redirect('http://localhost:3000/')
    }

  });
});

app.get('/refresh_token', function(req, res) {

  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

let port = process.env.PORT || 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)