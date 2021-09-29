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
      <Header/>
    <Switch>
      <Route path = "/" component={Home} exact />
      </Switch>
      <Switch>
      <Route path = "/projects" component={Projects} exact />
      </Switch>
      <Switch>
      <Route path = "/blogs" component={Blogs} exact />
      </Switch>
      <Switch>
      <Route path = "/arch_guide" component={ArchGuide} exact />
      </Switch>
      <Route path = "/important-linux-command" component={ImportantLinuxCommand} exact />
      <Footer/>
    </Router>
  )
}

export default App