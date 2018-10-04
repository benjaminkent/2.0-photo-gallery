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
        {/* <CategoryList /> */}
        <section className="section">
          <div className="container">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="#">
                    <span className="icon is-small">
                      <i className="fas fa-home" aria-hidden="true" />
                    </span>
                    <span>Home</span>
                  </a>
                </li>
                <li className="is-active">
                  <a href="#">
                    <span>{Data.pandas.title}</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="columns is-mobile">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h2>
                        <a>{Data.pandas.title}</a>
                      </h2>
                    </div>

                    <div className="content">{Data.pandas.description}</div>
                  </div>
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={Data.pandas.photos[0].imageURL}
                        alt="Panda Bear"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h2>
                        <a>{Data.miniatures.title}</a>
                      </h2>
                    </div>

                    <div className="content">{Data.miniatures.description}</div>
                  </div>
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={Data.miniatures.photos[0].imageURL}
                        alt="Panda Bear"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
