import './App.css';
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Components/Header"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"
import SecondMain from "./Components/SecondMain"
import About from "./Components/About/About"
import Contact from "./Components/Contact"
import RecipePage from "./Components/recipePage/RecipePage"
import Recipes from "./Components/Recipes"
import Deserts from "./Components/Deserts"




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />

          </Route>
          <Route path="/recipe/:id">
            <RecipePage />
          </Route>

          <Route path="/">
            <MainContent />
            <SecondMain />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          {/* <Route path="/deserts">
            <Deserts />
          </Route> */}

        </Switch>
        <Footer />
      </div>
    </Router>

  )
}
export default App;
