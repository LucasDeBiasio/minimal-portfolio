import React from 'react'
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {

  return (
    <div className = "App">
      <Intro></Intro>
      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
