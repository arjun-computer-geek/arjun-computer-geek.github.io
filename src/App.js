import React from 'react'
import { Route, Switch, useLocation, Redirect } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Blogs from './components/blogs/Blogs'
import ArchGuide from './components/blogs/archGuide/ArchGuide'
import ImportantLinuxCommand from './components/blogs/importLinuxCommand/ImportantLinuxCommand'

const App = () => {
  const {search} = useLocation();

  const redirectUrl = () => {
    if(search === '?/blogs'){
     return <Redirect to={{ pathname: "/blogs"}} />
    }
    if(search === '?/projects'){
     return <Redirect to={{ pathname: "/projects"}} />
    }
    if(search === '?/arch_guide'){
     return <Redirect to={{ pathname: "/arch_guide"}} />
    }
    if(search === '?/important-linux-command'){
     return <Redirect to={{ pathname: "/important-linux-command"}} />
    }
    return "";
  }

  return (
    <>
      { redirectUrl() }
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/blogs" component={Blogs} exact />
        <Route path="/arch_guide" component={ArchGuide} exact />
        <Route path="/important-linux-command" component={ImportantLinuxCommand} exact />
      </Switch>
      <Footer />
    </>
  )
}

export default App