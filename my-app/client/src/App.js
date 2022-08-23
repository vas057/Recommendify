import React, { Component } from 'react';
// import './App.css';
import queryString from 'query-string';

// class App extends Component {
//   componentDidMount() {
//     let parsed = queryString.parse(window.location.search);
//     let accessToken = parsed.access_token;
//     if (!accessToken)
//       return;
//     fetch('https://api.spotify.com/v1/me', {
//       headers: {'Authorization': 'Bearer ' + accessToken}
//     }).then(response => response.json())
//     .then(data => this.setState({
//       user: {
//         name: data.display_name
//       }
//     }))

//     fetch('https://api.spotify.com/v1/me/playlists', {
//       headers: {'Authorization': 'Bearer ' + accessToken}
//     }).then(response => response.json())
//     .then(data => this.setState({
//       playlists: data.items.map(item => {
//         console.log(data.items)
//         return {
//           name: item.name,
//           imageUrl: item.images[0].url, 
//           songs: []
//         }
//     })
//     }))

//   }
//     return (        <div> : <button onClick={() => {
//             window.location = 'http://localhost:8888/login'}
//           }
//           style={{padding: '20px', 'font-size': '50px', 'margin-top': '20px'}}>Sign in with Spotify</button>
//         }
//       </div>
//     );
//   }
// }

// export default App;

import './App.css';


function App() {

  function getToken() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
  
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <button onClick={() => {window.location = 'http://localhost:8888/login'}}
          style={{padding: '20px', 'font-size': '50px', 'margin-top': '20px'}}>Sign in with Spotify</button>
      <button onClick={getToken}
        style={{padding: '20px', 'font-size': '50px', 'margin-top': '20px'}}>Return data</button>
    </div>
    


  );
}


export default App;