import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import '../CSS/Car.css'
import '../CSS/Main.css'
import Header from './Header';
import Footer from './Footer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CarPage() {
  return (
    <div>
      <div>
        <Header />  
      </div>
      
      <div className="car_section1">
        <h1>차량 검색</h1> <br />
        궁금한 차량을 검색하세요. 다양한 차량이 있습니다.
      </div>
      <div className="div_column">
        <div className="car_search">
            <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth label="차량 검색" id="fullWidth" />
          </Box>
          <Button variant="text">검색</Button>
      </div>
    </div>
    <div className="home_surveDiv1">
      
    </div>
      
      <div>
        <Footer />
      </div>
    </div>

  )
}

export default CarPage;