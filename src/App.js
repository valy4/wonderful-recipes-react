import './App.css';
import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./Components/Header"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"
import SecondMain from "./Components/SecondMain"


// const callApiKey = "0bfd9699a1f041569f9c334fa5e31134"
function About() {
  return <h1>About</h1>
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/recipe/:id">
            <About />
          </Route>
          <Route path="/">
            <MainContent />
            <SecondMain />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  )
}
export default App;
