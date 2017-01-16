import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import News from './pages/News'
import About from './pages/About'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/news" component={News} />
    <Route path="/about" component={About} />
  </Router>
), document.getElementById('root'))