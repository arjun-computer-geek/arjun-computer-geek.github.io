import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Blogs from './components/blogs/Blogs'
import ArchGuide from './components/blogs/archGuide/ArchGuide'
import ImportantLinuxCommand from './components/blogs/importLinuxCommand/ImportantLinuxCommand'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/gh-pages-url" component={Home} exact />
        <Route path="/gh-pages-url/projects" component={Projects} exact />
        <Route path="/gh-pages-url/blogs" component={Blogs} exact />
        <Route path="/gh-pages-url/arch_guide" component={ArchGuide} exact />
        <Route path="/gh-pages-url/important-linux-command" component={ImportantLinuxCommand} exact />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App