import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Data from './Data.json'

class CategoryList extends Component {
  render() {
    return (
      <>
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
            <div className="columns is-mobile">
              {Object.keys(Data).map(category => {
                return (
                  <div className="column">
                    <div className="card">
                      <div className="card-content">
                        <div className="content">
                          <h2>
                            <Link to={`/${category}`}>
                              {Data[category].title}
                            </Link>
                          </h2>
                        </div>
                        <div className="content">
                          {Data[category].description}
                        </div>
                      </div>
                      <div className="card-image">
                        <figure className="image">
                          <Link to={`/${category}`}>
                            <img
                              src={Data[category].photos[0].imageURL}
                              alt="Panda Bear"
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default CategoryList
