import React, { Component } from 'react'
import Data from './Data.json'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                <a>Things I Like</a>
              </h1>
              <h2 class="subtitle">A Photo Gallery by Benjamin Kent Jehl</h2>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <nav class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li className="is-active">
                  <a href="#">
                    <span class="icon is-small">
                      <i class="fas fa-home" aria-hidden="true" />
                    </span>
                    <span>Home</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="columns is-mobile">
              <div class="column">1</div>
              <div class="column">2</div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
