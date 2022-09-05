
import './App.css';
import Homepage from './Pages/Homepage';
import TogglePage from './Pages/TogglePage';
import ErrorPage from './Pages/Errorpage';
import DisplayPage from './Pages/DisplayPage';
import SearchBar from './components/SearchBar'
import Toggle from './components/Slider';
import NoSongs from './Pages/NoSongs';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link} from "react-router-dom";
import queryString from 'query-string';
import accessToken from './Pages/Homepage'
import { Button } from 'react-bootstrap';


function App() {
  // let navigate = useNavigate();

  return(
    <div>
      {/* <Homepage></Homepage> */}
     <Router>
        
        <Routes>
          <Route path = "/" element = {<Homepage></Homepage>}></Route>
          <Route path = "/TogglePage" element = {<TogglePage></TogglePage>}></Route>
          <Route path = "/DisplayPage" element = {<DisplayPage></DisplayPage>}></Route>
          <Route path = "/NoSongs" element = {<NoSongs></NoSongs>}></Route>


          
          {/* <Route path = "/SearchBar" element = {<SearchBar></SearchBar>}></Route> */}
          <Route path = "/*" element = {<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Router>
    </div>
  )
  
}


export default App;