import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        {/*Nav*/}
        <Nav/>
        {/*Home*/}
        <Home/>
        {/*Skills*/}
        <Skills/>
        <Routes>
          <Route exact path='/'></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
