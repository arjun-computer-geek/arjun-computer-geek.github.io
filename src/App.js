import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import ArchGuide from './components/ArchGuide'

const App = () => {
  return (
    <Router>
      <Header/>
      <Route path = "/" component={Home} exact />
      <Route path = "/projects" component={Projects} exact />
      <Route path = "/blogs" component={Blogs} exact />
      <Route path = "/arch_guide" component={ArchGuide} exact />
      <Footer/>
    </Router>
  )
}

export default App