import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./Views/Header";
import Footer from './Views/Footer';
import Container from "@material-ui/core/Container";


import Autoglassjpeg from "./assets/Images/autoglassjpeg.png";

import "./App.css";



function App() {
  return (
   
    <div className="App">
      <Container maxWidth="xl" className="App">
      <div> 
        <Router>
        < Header />
        </Router>
        </div>
        <div><Footer /></div>
      
       
        
      </Container>
      

    

    </div>
    
  );
}

export default App;
