import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Data from './Data.json'

class PhotoList extends Component {
  render() {
    const category = this.props.match.params.category
    const title = Data[category].title
    const description = Data[category].description
    console.log(category)

    return (
      <section className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link to="/">
                  <span className="icon is-small">
                    <i className="fas fa-home" aria-hidden="true" />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li className="is-active">
                <a href="#">
                  <span>{title}</span>
                </a>
              </li>
            </ul>
          </nav>
          <h3 className="title">{title}</h3>
          <h4 className="subtitle">{description}</h4>
          <div className="columns is-multiline">
            {Data[category].photos.map((photo, index) => {
              return (
                <div className="column">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                        <figure className="image">
                          <Link to={`/${category}/${index}`}>
                            <img src={photo.imageURL} alt="Panda Waving" />
                          </Link>
                          <figcaption>
                            <Link to={`/${category}/${index}`}>
                              {photo.title}
                            </Link>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default PhotoList
