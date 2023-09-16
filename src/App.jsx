import React from 'react'
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {

  return (
    <div className = "App">
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Timeline></Timeline>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App