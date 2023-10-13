// import { useState } from 'react'
import './App.css'
// import {BsFillMoonStarsFill} from 'react-icons/bs';
// import Header from './components/Homepage';
// import Introduction from './components/Introduction';
import Homepage from './components/Homepage';
import express from 'express';
import path from 'path';

const app = express();
const port = 3000; // Your desired port number

app.use(express.static(path.join(__dirname, 'Portfolio', 'build')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


function App() {
  return (
    <>
    <head>
      <title>Amanueal Fasil Mamo</title>
      <meta name="description" content='General Information'></meta>
    </head>

    <Homepage/>

  
    </>
  )
}

export default App
