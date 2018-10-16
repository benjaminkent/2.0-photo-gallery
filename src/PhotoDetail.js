import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Data from './Data.json'

class PhotoDetail extends Component {
  render() {
    const { category, index } = this.props.match.params

    const photoTitle = Data[category].photos[index].title
    const imageURL = Data[category].photos[index].imageURL
    const sourceURL = Data[category].photos[index].sourceURL
    const title = Data[category].title

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
              <li>
                <Link to={`/${category}`}>
                  <span>{title}</span>
                </Link>
              </li>
              <li className="is-active">
                <a href="#">
                  <span>{photoTitle}</span>
                </a>
              </li>
            </ul>
          </nav>
          <h3 className="title">{photoTitle}</h3>
          <figure className="image">
            <img src={imageURL} />
          </figure>
          <p className="is-small">
            <a href={sourceURL}>Source</a>
          </p>
        </div>
      </section>
    )
  }
}

export default PhotoDetail
