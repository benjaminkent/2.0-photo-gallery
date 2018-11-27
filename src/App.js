import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  <a>Things I Like</a>
                </h1>
                <h2 className="subtitle">
                  A Photo Gallery by Benjamin Kent Jehl
                </h2>
              </div>
            </div>
          </section>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:category" component={PhotoList} />
            <Route path="/:category/:index" component={PhotoDetail} />
            <CategoryList />
            <PhotoList />
            <PhotoDetail />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
