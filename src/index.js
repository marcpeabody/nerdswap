import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import News from './components/news/News'
import About from './components/about/About'
import CardSearch from './components/card-search/CardSearch'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/news" component={News} />
    <Route path="/about" component={About} />
    <Route path="/search/:cardName" component={CardSearch} />
  </Router>
), document.getElementById('root'))