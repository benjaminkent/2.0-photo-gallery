import React, { Component } from 'react'
import Data from './Data.json'
import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'

class App extends Component {
  render() {
    return (
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
        {/* <CategoryList /> */}
        {/* <PhotoList /> */}
        <PhotoDetail />
      </div>
    )
  }
}

export default App
