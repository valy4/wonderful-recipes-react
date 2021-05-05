import './App.css';
import React, { useState, useEffect } from "react"

import Header from "./Components/Header"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"
import SecondMain from "./Components/SecondMain"


// const callApiKey = "0bfd9699a1f041569f9c334fa5e31134"

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <SecondMain />
      <Footer />
    </div>
  )
}
export default App;
