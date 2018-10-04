import React, { Component } from 'react'
import Data from './Data.json'
import './App.css'
import CategoryList from './CategoryList'

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
        <section className="section">
          <div className="container">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li className="is-active">
                  <a href="#">
                    <span className="icon is-small">
                      <i className="fas fa-home" aria-hidden="true" />
                    </span>
                    <span>Home</span>
                  </a>
                </li>
              </ul>
            </nav>
            <CategoryList />
          </div>
        </section>
      </div>
    )
  }
}

export default App
