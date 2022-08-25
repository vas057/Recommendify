// import React, { Component } from 'react';
// // import './App.css';
// import queryString from 'query-string';

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
import Homepage from './Pages/Homepage';
import TogglePage from './Pages/TogglePage';
import ErrorPage from './Pages/Errorpage';
import SearchBar from './components/SearchBar'
import Toggle from './components/Slider';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link} from "react-router-dom";
import queryString from 'query-string';
import accessToken from './Pages/Homepage'

// function getToken() {
//   let parsed = queryString.parse(window.location.search);
//   let accessToken = parsed.access_token;

//   fetch('https://api.spotify.com/v1/me', {
//     headers: {'Authorization': 'Bearer ' + accessToken}
//   }).then(response => response.json())
//   .then(data => console.log(data))

//   return accessToken;
// }

// function App() {
//   return (
//     <div>
//       <Homepage></Homepage>
//       <TogglePage></TogglePage>
//       <button onClick={() => {
//         let token = getToken()
//         console.log(token)
//         if (!token) {
//             <TogglePage></TogglePage>
//         }
//         else {
//             <TogglePage></TogglePage>
//         }
//         }}
//         style={{padding: '20px', 'font-size': '50px', 'margin-top': '20px'}}>Return data</button> 
//     </div>
    
//   );
// }

function App() {
  // let navigate = useNavigate();

  return(
    <div>
      {/* <Homepage></Homepage> */}
     <Router>
        
        <Routes>
          <Route path = "/" element = {<Homepage></Homepage>}></Route>
          <Route path = "/TogglePage" element = {<TogglePage></TogglePage>}></Route>
          <Route path = "/Toggle" element = {<Toggle></Toggle>}></Route>
          
          <Route path = "/SearchBar" element = {<SearchBar></SearchBar>}></Route>
          <Route path = "/*" element = {<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Router>

{/* 
      <button onClick={() => {
      let token = getToken()
      console.log(token)
      if (!token) {
        // navigate('/TogglePage')
      }
      else {
        window.location='http://localhost:3000/TogglePage';
        // navigate('/TogglePage')
      }
      }}
      style={{padding: '20px', 'font-size': '50px', 'margin-top': '20px'}}>Return data</button>  */}
    </div>
  )
  
}


export default App;

//routing how to