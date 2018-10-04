import React, { Component } from 'react'
import Data from './Data.json'

class PhotoDetail extends Component {
  render() {
    return (
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
              <li>
                <a href="#">
                  <span>{Data.pandas.title}</span>
                </a>
              </li>
              <li className="is-active">
                <a href="#">
                  <span>{Data.pandas.photos[0].title}</span>
                </a>
              </li>
            </ul>
          </nav>
          <h3 className="title">{Data.pandas.photos[0].title}</h3>
          <figure className="image">
            <img src={Data.pandas.photos[0].imageURL} />
          </figure>
        </div>
      </section>
    )
  }
}

export default PhotoDetail
