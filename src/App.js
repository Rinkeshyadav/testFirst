import logo from './logo.svg';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
// import Main from './component/LoginAuthentication/Main.js'
import ImageCropper from './component/testingPorpuse'
import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'; // Import the library styles


function App() {
  return (
    <>
    <ImageCropper />
    </>
   
   
  );
}

export default App;
