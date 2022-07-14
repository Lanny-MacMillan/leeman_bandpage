import './App.css';
// import {useState, useEffect} from'react'
import Home from './components/Home'
import About from './components/About'
import Music from './components/Music'
import Videos from './components/Videos'
import Merch from './components/Merch'
import Admin from './components/Admin'
import ResponsiveAppBar from './components/NavBar.js';
import { Route, Routes} from "react-router";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const App = () => {

  const DarkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const LightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });


    return (
      <>
      <ThemeProvider theme={DarkTheme}>
        <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Music' element={<Music />} />
        <Route path='Videos' element={<Videos />} />
        <Route path='Merch' element={<Merch />} />
        <Route path='Admin' element={<Admin />} />
      </Routes>
    </ThemeProvider>
      </>
    )
}

export default App;
