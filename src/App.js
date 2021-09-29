import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/blogs" component={Blogs} exact />
        <Route path="/arch_guide" component={ArchGuide} exact />
        <Route path="/important-linux-command" component={ImportantLinuxCommand} exact />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App